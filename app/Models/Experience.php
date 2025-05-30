<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Experience extends Model
{
    use HasUuids;
    use SoftDeletes;

    protected $keyType = 'string';

    protected $fillable = [
        'user_id',
        'job_title',
        'company_name',
        'year_start',
        'year_end',
        'description'
    ];
}
