<?php

use App\Http\Controllers\WaitlistController;
use Illuminate\Support\Facades\Route;
use Laravel\Fortify\Features;

foreach (config('tenancy.central_domains') as $domain) {
    Route::domain($domain)->group(function () {

        Route::inertia('/', 'landing', [
            'canRegister' => Features::enabled(Features::registration()),
        ])->name('home');

        Route::get('lang/{locale}', function ($locale) {
            if (in_array($locale, ['en', 'it'])) {
                session()->put('locale', $locale);
            }

            return back();
        })->name('language.switch');

        Route::post('/waitlist', WaitlistController::class)->name('waitlist.store');
    });
}
