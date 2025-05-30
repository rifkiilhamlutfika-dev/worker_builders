<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Educational extends Model
{
    use HasUuids;
    use SoftDeletes;

    protected $keyType = 'string';

    protected $fillable = [
        'user_id',
        'school_name',
        'starting_year',
        'graduation_year',
        'major',
        'final_score',
        'description'
    ];
}
