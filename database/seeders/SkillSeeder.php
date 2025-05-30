<?php

namespace Database\Seeders;

use App\Models\Skill;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class SkillSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $user = User::first('id');

        Skill::create([
            'user_id' => $user->id,
            'name' => 'javascript',
            'level' => 'advanced'
        ]);

        Skill::create([
            'user_id' => $user->id,
            'name' => 'react',
            'level' => 'basic'
        ]);

        Skill::create([
            'user_id' => $user->id,
            'name' => 'badminton',
            'level' => 'experted'
        ]);
    }
}
