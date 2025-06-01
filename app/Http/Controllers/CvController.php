<?php

namespace App\Http\Controllers;

use App\Models\Summary;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Inertia\Inertia;

class CvController extends Controller
{
    public function cvForm()
    {
        $user = User::first();

        return Inertia::render('Cv/CvForm', [
            'user' => $user->only(
                'first_name',
                'last_name',
                'email',
                'phone',
                'address',
                'gender',
                'country',
                'city',
                'place_of_birth',
                'date_of_birth'
            )
        ]);
    }

    public function userUpdate(Request $request)
    {
        $validate = Validator::make($request->all(), [
            'firstName' => 'required|string|max:255',
            'lastName' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'phone' => 'required|string|max:255',
            'city' => 'required|string|max:255',
            'country' => 'required|string|max:255',
            'placeOfBirth' => 'string|max:255|nullable',
            'dateOfBirth' => 'date|max:255|nullable',
            'address' => 'string|nullable',
            'gender' => 'string|max:6|nullable'
        ]);

        if ($validate->fails()) return back()->withErrors($validate)->withInput();

        // $user = User::first('id');

        // User::where('id', $user->id)->update([
        //     'first_name' => $request->firstName,
        //     'last_name' => $request->lastName,
        //     'email' => $request->email,
        //     'phone' => $request->phone,
        //     'city' => $request->city,
        //     'country' => $request->country,
        //     'place_of_birth' => $request->placeOfBirth,
        //     'date_of_birth' => $request->dateOfBirth,
        //     'address' => $request->address,
        //     'gender' => $request->gender,
        //     'updated_at' => now()
        // ]);

        session([
            'form_cv_user' => $request->all()
        ]);

        return back()->with('succes', true);
    }

    public function summaryForm(Request $request)
    {
        $validate = Validator::make($request->all(), [
            'summary' => 'required|string',
        ]);

        if ($validate->fails()) return back()->withErrors($validate)->withInput();

        session([
            'form_cv_summary' => $request->summary
        ]);

        return back();
    }

    public function educationalForm(Request $request)
    {

        $validate = Validator::make($request->all(), [
            'summary' => 'required|string',
        ]);

        if ($validate->fails()) {
            return back()->withErrors($validate)->withInput();
        }

        session([
            'form_cv_summary' => $request->summary
        ]);

        return back();
    }
}
