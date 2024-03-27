const bookmodel = require('../Models/bookModel');

exports.booking = async (req, res, next) => {
    try {
        const booking = await bookmodel.find();

        res.status(200).json({
            success: true,
            message: 'Sucessfully get data.',
            data: booking
        });
    } catch (error) {
        res.status(404).json({
            success: false,
            message: 'Not found.'
        });
    }
};

exports.create = async (req, res, next) => {
    try {
        const newBook = await bookmodel.create({
            ...req.body
        });

        res.status(200).json({
            success: true, 
            message: 'Successfully created.', 
            data: newBook
        });
    } catch (error) {
        res.status(500).json({
            success: false, 
            message: 'Failed to create.'
        });
    }
};

exports.edit = async (req, res, next) => {
    try {
        const id  = req.params.id;

        const updatedBook = await bookmodel.findByIdAndUpdate(id, {
            $set: req.body
        }, {new: true});

        res.status(200).json({
            success: true, 
            message: 'Successfully updated.', 
            data: updatedBook
        });
    } catch (error) {
        res.status(500).json({
            success: false, 
            message: 'Failed to update.'
        });
    }
};

exports.delete = async (req, res, next) => {
    try {
        const id  = req.params.id;

        await bookmodel.findByIdAndDelete(id);

        res.status(200).json({
            success: true, 
            message: 'Successfully deleted.'
        });
    } catch (error) {
        res.status(500).json({
            success: false, 
            message: 'Failed to delete.'
        });
    }
};
