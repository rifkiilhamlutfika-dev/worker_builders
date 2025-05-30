<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class CourseTraining extends Model
{
    use HasUuids;
    use SoftDeletes;

    protected $keyType = 'string';

    protected $fillable = [
        'user_id',
        'certificate_name',
        'organizer_name',
        'certificate_valid',
        'certificate_expired',
        'description'
    ];
}
