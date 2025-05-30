<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/app', function () {
    return Inertia::render('Test');
});

Route::get('/dashboard', function () {
    return Inertia::render('Test');
});
