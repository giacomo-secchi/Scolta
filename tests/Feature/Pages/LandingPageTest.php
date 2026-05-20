<?php

use App\Mail\WaitlistLeadMail;
use Illuminate\Support\Facades\Mail;
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

it('switches language and stores locale in session', function () {
    $this->withSession(['previous_url' => '/']);

    $response = $this->get(route('language.switch', 'it'));

    $response->assertRedirect();

    $this->assertEquals('it', session('locale'));
});

it('ignores invalid locale', function () {
    $this->withSession(['locale' => 'en']);

    $this->get(route('language.switch', 'fr'));

    $this->assertEquals('en', session('locale'));
});

it('stores waitlist lead and sends email', function () {
    Mail::fake();

    $this->post(route('waitlist.store'), [
        'email' => 'test@example.com',
    ])
        ->assertRedirect()
        ->assertSessionHas('success');

    Mail::assertSent(WaitlistLeadMail::class);
});

it('validates waitlist email', function () {
    $this->post(route('waitlist.store'), [
        'email' => 'not-an-email',
    ])->assertSessionHasErrors('email');
});
