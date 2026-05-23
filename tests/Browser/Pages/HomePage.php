<?php

namespace Tests\Browser\Pages;

use Laravel\Dusk\Browser;

class HomePage extends Page
{
    /**
     * Get the URL for the page.
     */
    public function url(): string
    {
        return '/';
    }

    /**
     * Assert that the browser is on the page.
     */
    #[\Override]
    public function assert(Browser $browser): void
    {
        $browser->assertSee('Ready to optimize your')
                ->assertSee('Book a Free Demo')
                ->assertSee('Contact Sales')
                ->assertSee('Now in Early Access')
                ->assertSee('Trusted by teams worldwide');
    }

    /**
     * Get the element shortcuts for the page.
     *
     * @return array<string, string>
     */
    #[\Override]
    public function elements(): array
    {
        return [
            '@heroEmailInput' => 'input[name=email]',
            '@submitButton' => 'button[type=submit]',
        ];
    }
}
