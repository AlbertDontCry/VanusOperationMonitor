import { ObjectId, Schema, model } from "mongoose";

export interface Connection {
  user_id: string,
  collected_at: Date,
  eventbus_id: ObjectId,
  event_number: number,
  source_id: ObjectId,
  sink_id: ObjectId,
}

const schema = new Schema<Connection>(
  {
    user_id: {
      type: String,
      required: true,
    },
    collected_at: {
      type: Date,
      required: true,
    },
    eventbus_id: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    event_number: {
      type: Number,
      required: true,
    },
    source_id: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    sink_id: {
      type: Schema.Types.ObjectId,
      required: true,
    },
  },
  { collection: "connections" }
);

const connection = model<Connection>("connection", schema);

export default connection;