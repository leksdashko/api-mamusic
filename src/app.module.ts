import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TrackModule } from './track/track.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://leksdashko:221094@cluster0.grcnzoe.mongodb.net/?retryWrites=true&w=majority',
    ),
    TrackModule,
  ],
})
export class AppModule {}
