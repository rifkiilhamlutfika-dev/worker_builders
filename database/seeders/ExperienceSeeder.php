<?php

namespace Database\Seeders;

use App\Models\Experience;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Faker\Factory as Faker;

class ExperienceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $faker = Faker::create();

        $user = User::first('id');


        Experience::create([
            'user_id' => $user->id,
            'job_title' => $faker->jobTitle(),
            'company_name' => $faker->company(),
            'start_work' => $faker->date(),
            'end_work' => $faker->date(),
            'description' => $faker->text()
        ]);

        Experience::create([
            'user_id' => $user->id,
            'job_title' => $faker->jobTitle(),
            'company_name' => $faker->company(),
            'start_work' => $faker->date(),
            'end_work' => $faker->date(),
            'description' => $faker->text()
        ]);
    }
}
