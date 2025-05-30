<?php

namespace Database\Seeders;

use App\Models\TemplateCV;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class TemplateCvSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        TemplateCv::create([
            'img_cover' => null,
            'link_preview' => "https://youtube.com",
        ]);

        TemplateCv::create([
            'img_cover' => null,
            'link_preview' => "https://youtube.com",
        ]);

        TemplateCv::create([
            'img_cover' => null,
            'link_preview' => "https://youtube.com",
        ]);

        TemplateCv::create([
            'img_cover' => null,
            'link_preview' => "https://youtube.com",
        ]);

        TemplateCv::create([
            'img_cover' => null,
            'link_preview' => "https://youtube.com",
        ]);
    }
}
