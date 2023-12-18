import { Schema, model, models } from "mongoose";

export interface ITournament extends Document {
    id: string; 
    title: string;
    date: Date;
    state: string;
    district: string;
    place: string;
    venue: string;
    createdAt: Date;
    totalTeams: string;
    teamMem: string;
    playingMem: string;
    subMem: string;
    entryFees: string;
    organiser: { _id: string, userName: string, phoneNumber: string }
}

const tournamentSchema = new Schema({
    t_Name: { type: String, required: true },
    t_date: { type: Date, required: true },
    state:  { type: String, required: true },
    district : { type: String, required: true },
    place : { type: String, required: true },
    venue : { type: String, required: true },
    createdAt : { type: Date, default: Date.now },
    totalTeams : { type: String, required : true },
    teamMem : { type: String, required: true },
    playingMem : { type: String, required : true },
    subMem : { type: String, required:  true },
    entryFees : { type: String, required : true },
    organiser : { type: Schema.Types.ObjectId, ref: 'User' }
})

const Tournament = models.Tournament || model('Tournament', tournamentSchema);

export default Tournament;