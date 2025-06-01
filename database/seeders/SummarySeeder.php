<?php

namespace Database\Seeders;

use App\Models\Cv;
use App\Models\Summary;
use App\Models\SummaryModel;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Faker\Factory as Faker;

class SummarySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $user_id = User::first('id');
        $cv_id = Cv::first('id');

        $faker = Faker::create();

        Summary::create([
            "user_id" => $user_id->id,
            "cv_id" => $cv_id->id,
            "summary" => $faker->text
        ]);
    }
}
