<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use App\Models\Order;
use Carbon\Carbon;

class BarcodeController extends Controller
{
	public function index()
	{
		$orderQuery = Order::get();

		$title = 'Barcode Scanner - Laravel & React';
		$heading = 'Laravel & React JS Barcode Generate.';
		$orders = json_encode($orderQuery);

		return view('welcome', get_defined_vars());
	}
}