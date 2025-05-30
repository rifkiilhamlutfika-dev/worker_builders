<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Faker\Factory as Faker;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $faker = Faker::create();

        User::create([
            'first_name' => $faker->firstName,
            'last_name' => $faker->lastName,
            'email' => $faker->email,
            'password' => bcrypt('halo'),
            'address' => $faker->address,
            'gender' => 'male',
            'phone' => $faker->phoneNumber,
            'country' => $faker->country
        ]);

        User::create([
            'first_name' => $faker->firstName,
            'last_name' => $faker->lastName,
            'email' => $faker->email,
            'password' => bcrypt('halo'),
            'address' => $faker->address,
            'gender' => 'female',
            'phone' => $faker->phoneNumber,
            'country' => $faker->country
        ]);

        User::create([
            'first_name' => $faker->firstName,
            'last_name' => $faker->lastName,
            'email' => $faker->email,
            'password' => bcrypt('halo'),
            'address' => $faker->address,
            'gender' => null,
            'phone' => $faker->phoneNumber,
            'country' => $faker->country
        ]);
    }
}
