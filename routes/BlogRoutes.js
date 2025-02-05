const express = require("express");
const {
  getAllBlogs,
  createBlog,
  getBlogById,
  updateBlog,
  deleteBlog,
} = require("../controllers/BlogController");

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Blogs
 *   description: The Blogs managing API
 */

/**
 * @swagger
 * /blogs:
 *   post:
 *     summary: create blog
 *     tags: [Blogs]
 *     requestBody:
 *        required: true
 *        content:
 *            application/json:
 *                schema:
 *                   $ref: '#/components/schemas/CreateBlog'
 *     responses:
 *       200:
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status: 
 *                   type: string
 *                   example: success
 *                 data:
 *                      $ref: '#/components/schemas/Blog'
 * 
 *       500:
 *         description: 	Internal Error
 *     security:
 *      - bearerAuth: []
 */

router.post("/", createBlog);

/**
 * @swagger
 * /blogs:
 *   get:
 *     summary: get all blogs
 *     tags: [Blogs]
 *     responses:
 *       200:
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status: 
 *                   type: string
 *                   example: success
 *                 data:
 *                   type: array
 *                   items: 
 *                      $ref: '#/components/schemas/Blog'
 *       500:
 *         description: 	Internal Error
 *     security:
 *      - bearerAuth: []
 */
router.get("/", getAllBlogs);

/**
 * @swagger
 * /blogs/{id}:
 *   get:
 *     summary: get blog by id
 *     tags: [Blogs]
 *     parameters:
 *      - in: path
 *        name: id
 *     responses:
 *       200:
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status: 
 *                   type: string
 *                   example: success
 *                 data:
 *                      $ref: '#/components/schemas/Blog'
 * 
 *       404:
 *         description: 	Blog Not Found
 * 
 *       500:
 *         description: 	Internal Error
 *     security:
 *      - bearerAuth: []
 */
router.get("/:id", getBlogById);

/**
 * @swagger
 * /blogs/{id}:
 *   put:
 *     summary: Update blog by id
 *     tags: [Blogs]
 *     parameters:
 *      - in: path
 *        name: id
 *     requestBody:
 *       required: true
 *       content:
 *           application/json:
 *               schema:
 *                  $ref: '#/components/schemas/Blog'
 *     responses:
 *       200:
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status: 
 *                   type: string
 *                   example: success
 *                 data:
 *                      $ref: '#/components/schemas/Blog'
 * 
 *       404:
 *         description: 	Blog Not Found
 * 
 *       500:
 *         description: 	Internal Error
 * 
 *     security:
 *      - bearerAuth: []
 */
router.put("/:id", updateBlog);

/**
 * @swagger
 * /blogs/{id}:
 *   delete:
 *     summary: delete blog by id
 *     tags: [Blogs]
 *     parameters:
 *      - in: path
 *        name: id
 *     responses:
 *       200:
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: success
 *                 msg:
 *                   type: string
 *                   example: Blog deleted successfuly 
 * 
 *       404:
 *         description: 	Blog Not Found
 * 
 *       500:
 *         description: 	Internal Error
 *     security:
 *      - bearerAuth: []
 */
router.delete("/:id", deleteBlog);



module.exports = router;
