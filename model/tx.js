
import mongoose from 'mongoose';

/**
 * The transaction object.  Very basic as
 * details will be requested by txid (hash)
 * from the node on demand.  A cache can be
 * implemented if needed for recent txs.
 */
const TX = mongoose.model('TX', {
    block: String,
    createdAt: Date,
    hash: String,
    height: Number,
    recipients: Number,
    ver: Number,
    vout: Number
});

export default TX;