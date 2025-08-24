const mongoose = require('mongoose');

const schema = mongoose.Schema({
    role_id:{type: mongoose.Schema.Types.ObjectId, required:true},
    
    permission:{type:String, required:true},
    created_by:{type: mongoose.Schema.Types.ObjectId, required:true},

    },
{   versionKey: false,
    timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
    }
});

class RolePrivillege extends mongoose.Model {}

schema.loadClass(RolePrivillege);
module.exports = mongoose.model('role_privillege', schema);