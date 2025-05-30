<?php

namespace Database\Seeders;

use App\Models\CourseTraining;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Faker\Factory as Faker;

class CourseTrainingSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $faker = Faker::create();

        $user = User::first('id');

        CourseTraining::create([
            'user_id' => $user->id,
            'certificate_name' => $faker->text(),
            'organizer_name' => $faker->domainName(),
            'certificate_valid' => $faker->date(),
            'certificate_expired' => $faker->date(),
            'description' => $faker->text()
        ]);

        CourseTraining::create([
            'user_id' => $user->id,
            'certificate_name' => $faker->text(),
            'organizer_name' => $faker->domainName(),
            'certificate_valid' => $faker->date(),
            'certificate_expired' => $faker->date(),
            'description' => $faker->text()
        ]);
    }
}
