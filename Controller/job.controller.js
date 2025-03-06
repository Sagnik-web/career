const Jobs = require("../Model/Jobs")


exports.createJob = async(req,res)=>{
    const {title,description} = req.body

    try {

        if(!title){
            return res.status(400).json({
                success:false,
                msg:"Title Not Foud"
            })
        }

        if(!description){
            return res.status(400).json({
                success:false,
                msg:"Description Not Foud"
            })
        }

        const newJob = await Jobs.create({title:title,description:description,hr:req.user._id}) 

        res.status(200).json({
            success:true,
            msg:"Job Posted Successfully",
            job:newJob
        })


    }catch(err){
        return res.status(500).json({ msg: `Error: ${err}` });
    }
}



exports.getAllActiiveJobs = async(req,res)=>{
    const page = parseInt(req.query.page) || 1; // Default to page 1 if not specified
    const limit = parseInt(req.query.limit) || 5; // Default to limit of 5 items per page
    const skip = (page - 1) * limit;



    try {
        const jobs = await Jobs.find({status:"Active"}).sort({createAt:-1}).skip(skip).limit(limit);
        const totalJobs = (await Jobs.find({status:"Active"})).length;
        const totalPages = Math.ceil(totalJobs / limit);

        if(!jobs){
            return res.status(400).json({
                success:false,
                msg:"No Jobs Found."
            });
        }


        res.status(200).json({
            success:true,
            currentPage: page,
            totalPages,
            totalJobs,
            jobs
        });


    }catch(err){
        return res.status(500).json({ msg: `Error: ${err}` });
    }
}


exports.getAllJobs = async(req,res)=>{
    const page = parseInt(req.query.page) || 1; // Default to page 1 if not specified
    const limit = parseInt(req.query.limit) || 5; // Default to limit of 5 items per page
    const skip = (page - 1) * limit;



    try {
        const jobs = await Jobs.find().sort({createAt:-1}).skip(skip).limit(limit);
        const totalJobs = await Jobs.countDocuments();
        const totalPages = Math.ceil(totalJobs / limit);

        if(!jobs){
            return res.status(400).json({
                success:false,
                msg:"No Jobs Found."
            });
        }


        res.status(200).json({
            success:true,
            currentPage: page,
            totalPages,
            totalJobs,
            jobs
        });


    }catch(err){
        return res.status(500).json({ msg: `Error: ${err}` });
    }
}


// Get single job by ID
exports.getJob = async (req, res) => {
    try {
        const { jobId } = req.params; // jobId from URL params

        // Find the job by its ID
        const job = await Jobs.findById(jobId)

        if (!job) {
            return res.status(404).json({success:false, msg: 'Job not found' });
        }

        res.status(200).json({
            success:true,
            msg:"Get Single Job Details",
            job
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({success:false, msg: 'Server error' });
    }
};



// Update job
exports.updateJob = async (req, res) => {
    try {
        const { jobId } = req.params; // jobId from URL params
        const updatedData = req.body; // New job data to be updated

        // Find the job by its ID and update it
        const job = await Jobs.findByIdAndUpdate(jobId, updatedData, { new: true, runValidators: true });

        if (!job) {
            return res.status(404).json({ 
                success:false, 
                msg: 'Job not found.' 
            });
        }

        res.status(200).json({
            success:true,
            msg:"Job Updated Successfully.",
            job
        });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ 
            success:false,
            msg: 'Server error' 
        });
    }
};



// Delete job by ID
exports.deleteJob = async (req, res) => {
    try {
        const { jobId } = req.params; // jobId from URL params

        // Find and delete the job
        const job = await Jobs.findByIdAndDelete(jobId);

        if (!job) {
            return res.status(404).json({success:false, msg: 'Job not found' });
        }

         res.status(200).json({success:true, msg: 'Job deleted successfully' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({success:false, msg: 'Server error' });
    }
};
