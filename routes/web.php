<?php

use Illuminate\Support\Facades\Route;
use Laravel\Fortify\Features;

Route::inertia('/', 'landing', [
    'canRegister' => Features::enabled(Features::registration()),
])->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::inertia('dashboard', 'dashboard')->name('dashboard');
});

Route::get('lang/{locale}', function ($locale) {
    if (in_array($locale, ['en', 'it'])) {
        session()->put('locale', $locale);
    }
    return redirect()->back();
})->name('language.switch');

require __DIR__.'/settings.php';
