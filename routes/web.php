<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
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

            return redirect()->back();
        })->name('language.switch');

        Route::post('/waitlist', function (Request $request) {
            $data = $request->validate([
                'email' => 'required|email',
            ]);

            $adminEmail = config('mail.from.address');

            Mail::raw("A new lead is interested in Scolta: {$data['email']}", function ($message) use ($adminEmail) {
                $message->to($adminEmail)
                    ->subject('New Early Access Lead');
            });

            return back()->with('success', 'Thank you! We will get in touch shortly.');
        })->name('waitlist.store');
    });
}

