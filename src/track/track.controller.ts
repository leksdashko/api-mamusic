import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ObjectId } from 'mongoose';
import { CreateTrackDto } from './dto/create-track.dto';
import { TrackService } from './track.service';

@Controller('/track')
export class TrackController {
  constructor(private trackService: TrackService) {}

  @Post()
  create(@Body() dto: CreateTrackDto) {
    return this.trackService.create(dto);
  }

  @Delete(':id')
  delete(@Param('id') id: ObjectId) {
    return this.trackService.delete(id);
  }

  @Get(':id')
  getOne(@Param('id') id: ObjectId) {
    return this.trackService.getOne(id);
  }

  @Get()
  getAll() {
    return this.trackService.getAll();
  }
}
