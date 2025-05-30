<?php

namespace Database\Seeders;

use App\Models\Educational;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Faker\Factory as Faker;

class EducationalSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $faker = Faker::create();

        $user = User::first('id');


        Educational::create([
            'user_id' => $user->id,
            'school_name' => $faker->company(),
            'starting_year' => $faker->year(),
            'graduation_year' => $faker->year(),
            'major' => $faker->text(),
            'final_score' => $faker->randomNumber(),
            'description' => $faker->text()
        ]);

        Educational::create([
            'user_id' => $user->id,
            'school_name' => $faker->company(),
            'starting_year' => $faker->year(),
            'graduation_year' => $faker->year(),
            'major' => $faker->text(),
            'final_score' => $faker->randomNumber(),
            'description' => $faker->text()
        ]);
    }
}
