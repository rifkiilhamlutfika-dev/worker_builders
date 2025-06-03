<?php

use App\Http\Controllers\CvController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Dashboard');
});

Route::prefix('cv-form')->group(function () {
    Route::get('/', [CvController::class, 'cvForm']);
    Route::post('/user-post', [CvController::class, 'userUpdate'])->name('cv.user.post');
    Route::post('/summary-post', [CvController::class, 'summaryForm'])->name('cv.summary.post');
    Route::post('/education-post', [CvController::class, 'educationForm'])->name('cv.education.post');
    Route::post('/experience-post', [CvController::class, 'experinceForm'])->name('cv.experience.post');
    Route::post('/skill-post', [CvController::class, 'skillForm'])->name('cv.skill.post');
    Route::post('/course-training-post', [CvController::class, 'courseTrainingForm'])->name('cv.course_training.post');
    Route::post('/social-media-post', [CvController::class, 'socialMediaForm'])->name('cv.social_media.post');
});
