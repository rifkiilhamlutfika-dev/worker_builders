<?php

namespace Database\Seeders;

use App\Models\Cv;
use App\Models\TemplateCv;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CvSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $user = User::first('id');
        $templateCv = TemplateCv::first('id');

        Cv::create([
            'user_id' => $user->id,
            'template_id' => $templateCv->id,
        ]);
    }
}
