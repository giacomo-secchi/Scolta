<?php

namespace Tests\Browser;

use Laravel\Dusk\Browser;
use Tests\DuskTestCase;
use Tests\Browser\Pages\HomePage;

class LandingPageTest extends DuskTestCase
{
    public function test_loads_landing_page_ui(): void
    {
        $this->browse(function (Browser $browser) {
            $browser->visit(new HomePage)
                ->assertPresent('@heroEmailInput')
                ->type('@heroEmailInput', 'test@example.com')
                ->press('@submitButton')
                ->waitForText("Thanks! We'll be in touch.");
        });
    }
}
