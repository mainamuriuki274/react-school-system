<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class StudentResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public static $wrap = 'students';

    public function toArray($request)
    {
        return  $wrap = [
                'id' => $this->id,
                'name' => $this->name,
                'email' => $this->email,
                'phonenumber' => $this->phonenumber,
                'form' => $this->form,
                'form_class' => $this->form_class,
        ];
    }
}
