<?php

namespace Tests;

use App\Models\Tenant;
use Illuminate\Support\Facades\URL;

abstract class TenantTestCase extends TestCase
{
    protected Tenant $tenant;

    protected string $tenantDomain = 'test.scolta.test';

    protected function setUp(): void
    {
        parent::setUp();

        $this->tenant = Tenant::create([
            'id' => 'test',
        ]);

        $this->tenant->domains()->create([
            'domain' => 'test.scolta.test',
        ]);

        tenancy()->initialize($this->tenant);

        config([
            'app.url' => 'http://test.scolta.test',
        ]);

        URL::forceRootUrl('http://test.scolta.test');
    }

    protected function tenantGet(string $uri)
    {
        return $this->withHeader('Host', $this->tenantDomain)
            ->get($uri);
    }

    protected function tenantPost(string $uri, array $data = [])
    {
        return $this->withHeader('Host', $this->tenantDomain)
            ->post($uri, $data);
    }

    protected function tearDown(): void
    {
        tenancy()->end();

        parent::tearDown();
    }
}
