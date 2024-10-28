'use client'
import React, { useState } from 'react'
import styles from './blogform.module.css'
import { z } from 'zod';

const blogSchema = z.object({
    title: z.string().min(5, "Title must be at least 5 characters long").max(100, "Title is too long"),
    author: z.string(),
    date: z.string(),
    category: z.enum(["match-analysis", "training-tips", "player-profile", "news"]).optional(),
    content: z.string().min(20, "Content must be at least 20 characters long"),
    embedMedia: z.string().url().optional(),
    excerpt: z.string().max(300, "Excerpt must be less than 300 characters").optional(),
    metaTitle: z.string().max(60, "Meta title must be less than 60 characters").optional(),
    metaDescription: z.string().max(160, "Meta description must be less than 160 characters").optional(),
    allowComments: z.boolean(),
    visibility: z.enum(["publish", "draft", "private"]),
    featuredImage: z.instanceof(File).optional(),
  });

const page = () => {
    const [formData, setFormData] = useState({
        title: '',
        author: 'Admin Name',
        date: new Date().toISOString().slice(0, 10),
        category: '',
        content: '',
        embedMedia: '',
        excerpt: '',
        metaTitle: '',
        metaDescription: '',
        allowComments: true,
        visibility: 'publish',
        featuredImage: null,
      });
    
      const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : type === 'file' ? files[0] : value,
    });
  };

  const validateForm = () => {
    try {
      blogSchema.parse(formData); // If it succeeds, form data is valid
      setErrors({});
      return true;
    } catch (err) {
      if (err instanceof z.ZodError) {
        const formErrors = {};
        err.errors.forEach((error) => {
          formErrors[error.path[0]] = error.message;
        });
        setErrors(formErrors);
      }
      return false;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form data submitted: ', formData);
    } else {
      console.log('Validation failed', errors);
    }
  };
  return (
    <div className={styles.container}>
        <div className={styles.form_container}>
            <h1>Create a Volleyball Blog Post</h1>
            <form onSubmit={handleSubmit}>
                {/* Title */}
                <label htmlFor="title">Blog Title *</label>
                {errors.title}
                <input type="text" id="title" name="title" placeholder="Enter blog title" value={formData.title} onChange={handleChange} required />

                {/* Author */}
                <label htmlFor="author">Author *</label>
                <input type="text" id="author" name="author" value={formData.author} readOnly />

                {/* Date */}
                <label htmlFor="date">Date *</label>
                <input type="date" id="date" name="date" value={formData.date} readOnly />

                {/* Featured Image */}
                <label htmlFor="featuredImage">Featured Image</label>
                <input type="file" id="featuredImage" name="featuredImage" accept="image/*" onChange={handleChange} />

                {/* Category */}
                <label htmlFor="category">Category</label>
                <select id="category" name="category" value={formData.category} onChange={handleChange}>
                <option value="">Select Category</option>
                <option value="match-analysis">Match Analysis</option>
                <option value="training-tips">Training Tips</option>
                <option value="player-profile">Player Profiles</option>
                <option value="news">News</option>
                </select>

                {/* Content */}
                <label htmlFor="content">Blog Content *</label>
                <textarea id="content" name="content" placeholder="Write your blog post here..." rows="8" value={formData.content} onChange={handleChange} required />

                {/* Embed Media */}
                <label htmlFor="embedMedia">Embed Video URL</label>
                <input type="url" id="embedMedia" name="embedMedia" placeholder="https://youtube.com/..." value={formData.embedMedia} onChange={handleChange} />

                {/* Post Excerpt */}
                <label htmlFor="excerpt">Post Excerpt</label>
                <textarea id="excerpt" name="excerpt" placeholder="Enter a short summary..." rows="3" value={formData.excerpt} onChange={handleChange} />

                {/* SEO Fields */}
                <label htmlFor="metaTitle">Meta Title</label>
                <input type="text" id="metaTitle" name="metaTitle" placeholder="SEO title" value={formData.metaTitle} onChange={handleChange} />

                <label htmlFor="metaDescription">Meta Description</label>
                <textarea id="metaDescription" name="metaDescription" placeholder="SEO description..." rows="2" value={formData.metaDescription} onChange={handleChange} />

                {/* Allow Comments */}
                <label>
                <input type="checkbox" name="allowComments" checked={formData.allowComments} onChange={handleChange} /> Allow Comments
                </label>

                {/* Visibility */}
                <label htmlFor="visibility">Publish Status *</label>
                <select id="visibility" name="visibility" value={formData.visibility} onChange={handleChange} required>
                <option value="publish">Publish</option>
                <option value="draft">Save as Draft</option>
                <option value="private">Private</option>
                </select>

                {/* Submit Button */}
                <button type="submit" className="submit-btn">Publish Post</button>
            </form>
        </div>
      
    </div>
  )
}

export default page
