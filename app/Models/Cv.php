<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUlids;
use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Cv extends Model
{
    use HasUuids;
    use SoftDeletes;

    protected $keyType = 'string';

    protected $fillable = [
        'user_id',
        'template_id',
    ];
}
