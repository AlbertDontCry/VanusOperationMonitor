import { Schema, model } from "mongoose";

export interface Active_user {
	user_id: string;
	active_date: Date; // active_date also can be the timestamp, depends on when the data have been collected
	country: string;
	is_premium?: boolean;
}

const schema = new Schema<Active_user>(
	{
    user_id: {
      type: String,
      required: true,
    },
		active_date: {
			type: Date,
			required: true,
		},
	  country: {
			type: String,
			required: true,
		},
		is_premium: {
			type: Boolean,
			required: false,
		},
	},
	{ collection: "active_users" }
);

const active_user = model<Active_user>("active_user", schema);

export default active_user;
