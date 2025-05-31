<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Dashboard');
});

Route::get('/cv-form', function () {
    return Inertia::render('Cv/CvForm');
});
