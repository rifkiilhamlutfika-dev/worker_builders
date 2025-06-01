<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Summary extends Model
{
    use SoftDeletes;
    use HasUuids;

    protected $keyType = 'string';

    protected $fillable = [
        "user_id",
        "cv_id",
        "summary"
    ];
}
