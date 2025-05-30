<?php

namespace Database\Seeders;

use App\Models\SocialMedia;
use App\Models\SocialMedias;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class SocialMediaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $user_id = User::first('id');

        SocialMedias::create([

            'user_id' => $user_id->id,
            'github' => 'https://google.com',
            'linkedin' => 'https://google.com',
            'instagram' => 'https://google.com',
            'youtube' => 'https://google.com',
            'created_at' => now(),
            'updated_at' => now()
        ]);
    }
}
