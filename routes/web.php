<?php

use App\Http\Controllers\CvController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Dashboard');
});

Route::get('/cv-form', [CvController::class, 'cvForm']);
Route::post('/cv-user-post', [CvController::class, 'userUpdate'])->name('cv.user.post');
