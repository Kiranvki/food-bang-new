const cloudinary = require("../middleware/cloud")
const fs = require("fs")

const removeTemp = (path) => {
    fs.unlinkSync(path);
}


const imageCtrl = {
    uploadProductImg: async (req, res) => {
        try {
            // res.json({msg:"file Upload"})
            // res.json({files:req.files})

            if (!req.files || Object.keys(req.files).length === 0)
                return res.status(400).json({ msg: "No files were uploaded" })

            const file = req.files.productImg
            // res.json({ files: file })

            //Validate file size
            if (file.size > 5 * 1024 * 1024) {
                removeTemp(file.tempFilePath)
                return res.status(400).json({ msg: "File size must be less than 5MB." })
            }

            if (file.mimetype !== "image/jpeg" && file.mimetype !== "image/png" && file.mimetype !=="image/webp") {
                removeTemp(file.tempFilePath)
                return res.status(400).json({ msg: "Only allow jpg/pnp formate" })
            }

            //uploads
            await cloudinary.v2.uploader.upload(file.tempFilePath, { folder: "products" }, async (err, result) => {
                if (err) res.status(400).json({ msg: err.message });

                removeTemp(file.tempFilePath);
                return res.status(200).json({
                    public_id: result.public_id,
                    url: result.secure_url
                })
            })

        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    },
    deleteProductImg: async (req, res) => {
        try {
            // res.json({ msg: "delete image" })
            const { public_id } = req.body;

            if (!public_id)
                return res.status(400).json({ msg: "no public id found" })

            await cloudinary.v2.uploader.destroy(public_id, (err, result) => {
                if (err) throw err;
                res.status(200).json({ msg: "Image Successfully deleted" })
            })
        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    },
    uploadProfileImg: async (req, res) => {
        try {
            // res.json({msg:"file Upload"})
            // res.json({files:req.files})

            if (!req.files || Object.keys(req.files).length === 0)
                return res.status(400).json({ msg: "No files were uploaded" })

            const file = req.files.profileImg
            // res.json({ files: file })

            //Validate file size
            if (file.size > 5 * 1024 * 1024) {
                removeTemp(file.tempFilePath)
                return res.status(400).json({ msg: "File size must be less than 5MB." })
            }

            if (file.mimetype !== "image/jpeg" && file.mimetype !== "image/png") {
                removeTemp(file.tempFilePath)
                return res.status(400).json({ msg: "Only allow jpg/pnp formate" })
            }

            //uploads
            await cloudinary.v2.uploader.upload(file.tempFilePath, { folder: "profile" }, async (err, result) => {
                if (err) res.status(400).json({ msg: err.message });

                removeTemp(file.tempFilePath);
                return res.status(200).json({
                    public_id: result.public_id,
                    url: result.secure_url
                })
            })

        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }

    },deleteProfileImg:async (req,res)=>{
        try {
            // res.json({ msg: "delete image" })
            const { public_id } = req.body;

            if (!public_id)
                return res.status(400).json({ msg: "no public id found" })

            await cloudinary.v2.uploader.destroy(public_id, (err, result) => {
                if (err) throw err;
                res.status(200).json({ msg: "Image Successfully deleted" })
            })
        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    }
}

module.exports = imageCtrl;