<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('dia__usuarios', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('id_dia')->nullable();
            $table->unsignedBigInteger('id_usuario')->nullable();
            $table->integer('estado');
            $table->time('hora_inicio');
            $table->time('hora_fin');
            $table->integer('duracion');
            $table->timestamps();
            $table -> foreign('id_dia')
                   ->references('id')->on('dias')
                   ->onDelete('set null')
                   ;
            $table -> foreign('id_usuario')
            ->references('id')->on('users')
            ->onDelete('set null')
            ;
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('dia__usuarios');
    }
};
