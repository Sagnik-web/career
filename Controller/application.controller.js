const Application = require("../Model/Application");
const User = require("../Model/User");
const { uploadCVtoS3 } = require("../utils/s3ImgUpload");
const { v4 } = require('uuid');


exports.createApplication = async (req, res) => {
    try {
        const desc = req.body.desc;
        const jobID = req.params.jobID
        // console.log(jobID);
        const cv = req.files.file;
        let cv_url =''
        if (cv) {
            const imageFileName = `${v4()}_${cv.name}`;
            // console.log(imageFileName);
            // console.log(cv.data);
            cv_url =await uploadCVtoS3(cv.data, `${imageFileName}`);
        }
        const application = new Application({
            resume_url:cv_url,
            candidate:req.user._id,
            job:jobID,
            desc:desc,
            status: 'Applied'
        });

        await application.save();

        const updateUser = await User.findByIdAndUpdate(req.user._id,{ $push: { applied:jobID } },{new:true})

        res.status(201).json({ 
            msg: 'Application created successfully', 
            application 
        });

    } catch (error) {
        res.status(500).json({ 
            msg: 'Error creating application', 
            error 
        });
    }
};



exports.getAllApplications = async (req, res) => {
    const page = parseInt(req.query.page) || 1; // Default to page 1 if not specified
    const limit = parseInt(req.query.limit) || 5; // Default to limit of 5 items per page

    const skip = (page - 1) * limit;


    try {
        const applications = await Application.find().populate('job candidate').skip(skip).limit(limit)
        const totalApplications = await Application.countDocuments();
        const totalPages = Math.ceil(totalApplications / limit);
        
        res.status(200).json({
            success:true,
            currentPage: page,
            totalPages,
            totalApplications,
            applications
        });
    } catch (error) {
        res.status(500).json({success:false, msg: 'Error fetching applications', error });
    }
};


exports.getSingleApplication = async (req, res) => {
    const { applicationId } = req.params;

    // const page = parseInt(req.query.page) || 1; // Default to page 1 if not specified
    // const limit = parseInt(req.query.limit) || 5; // Default to limit of 5 items per page

    // const skip = (page - 1) * limit;


    try {
        // const applications = await Application.find().skip(skip).limit(limit)
        // const totalApplications = await Application.countDocuments();
        // const totalPages = Math.ceil(totalApplications / limit);

    
        const application = await Application.findById(applicationId).populate('candidate job');
        if (!application) {
            return res.status(404).json({ message: 'Application not found' });
        }

        res.status(200).json({
            success:true,
            // currentPage: page,
            // totalPages,
            // totalApplications,
            application
        });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching application', error });
    }
};


// Only For login user
exports.getApplicationsByCandidate = async (req, res) => {
    // const { candidateId } = req.params;
    const page = parseInt(req.query.page) || 1; // Default to page 1 if not specified
    const limit = parseInt(req.query.limit) || 5; // Default to limit of 5 items per page

    const skip = (page - 1) * limit;


    try {
        const applications = await Application.find({ candidate: req.user._id }).populate('job').skip(skip).limit(limit);
        const totalApplications = (await Application.find({ candidate: req.user._id })).length;
        const totalPages = Math.ceil(totalApplications / limit);

        if (!applications || applications.length === 0) {
            return res.status(404).json({ message: 'No applications found for this candidate' });
        }
        res.status(200).json({
            success:true,
            currentPage: page,
            totalPages,
            totalApplications,
            applications
        });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching applications by candidate', error });
    }
};


exports.getApplicationsByJob = async (req, res) => {
    const { jobId } = req.params;

    const page = parseInt(req.query.page) || 1; // Default to page 1 if not specified
    const limit = parseInt(req.query.limit) || 5; // Default to limit of 5 items per page

    const skip = (page - 1) * limit;


    try {
        const applications = await Application.find({ job: jobId }).populate('candidate job').skip(skip).limit(limit);
        const totalApplications = (await Application.find({ job: jobId })).length;
        const totalPages = Math.ceil(totalApplications / limit);

        if (!applications || applications.length === 0) {
            return res.status(404).json({ message: 'No applications found for this job' });
        }


        res.status(200).json({
            success:true,
            currentPage: page,
            totalPages,
            totalApplications,
            applications
        });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching applications by job', error });
    }
};


exports.updateApplication = async (req, res) => {
    const { applicationId } = req.params;
    const updateData = req.body;

    try {
        const application = await Application.findByIdAndUpdate(applicationId, updateData, { new: true });
        if (!application) {
            return res.status(404).json({ msg: 'Application not found' });
        }
        res.status(200).json({ msg: 'Application updated successfully', application });
    } catch (error) {
        res.status(500).json({ msg: 'Error updating application', error });
    }
};


exports.deleteApplication = async (req, res) => {
    const { applicationId } = req.params;

    try {
        const application = await Application.findByIdAndDelete(applicationId);
        if (!application) {
            return res.status(404).json({ message: 'Application not found' });
        }
        res.status(200).json({ message: 'Application deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting application', error });
    }
};



