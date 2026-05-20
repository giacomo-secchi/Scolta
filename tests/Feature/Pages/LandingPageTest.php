<?php

use Inertia\Testing\AssertableInertia as Assert;

it('shares the correct global inertia props', function () {
    $this->get(route('home'))
        ->assertOk()
        ->assertInertia(fn (Assert $page) => $page
            ->where('name', config('app.name'))
            ->where('locale', app()->getLocale())
            ->where('contactEmail', config('mail.from.address'))
            ->has('language')
            ->has('auth')
        );
});

it('renders the landing page', function () {
    $this->get(route('home'))
        ->assertOk()
        ->assertInertia(fn (Assert $page) => $page
            ->component('landing')
        );
});
