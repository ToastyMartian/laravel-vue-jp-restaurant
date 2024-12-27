<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class AdminUserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        if (env('APPLICATION_MODE') !== 'dev') {
            $this->command->info('Environment is set to production, skipping seed');
            return;
        }

        // Check if admin user already exists
        if (User::where('email', 'cakallemein@gmail.com')->exists()) {
            $this->command->info('Admin user already exists');
            return;
        }

        User::factory()->create([
            'name' => 'admin',
            'email' => 'cakallemein@gmail.com',
            'password' => Hash::make('admin123'),
        ]);

        $this->command->info('Admin user created successfully');
    }
}