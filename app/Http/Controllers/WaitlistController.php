<?php

namespace App\Http\Controllers;

use App\Mail\WaitlistLeadMail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class WaitlistController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        $data = $request->validate([
            'email' => ['required', 'email'],
        ]);

        Mail::to(config('mail.from.address'))
            ->send(new WaitlistLeadMail($data['email']));

        return back()->with('success', 'Thank you! We will get in touch shortly.');
    }
}
