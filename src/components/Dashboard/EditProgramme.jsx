import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast } from "react-hot-toast";
import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import PageManagement from "../../hooks/management";

const schema = yup.object().shape({
  title: yup.string().required("Title is required"),
  slug: yup.string().required("Slug is required"),
  image: yup.string().required("Image URL is required"),
  content: yup.string().required("Content is required"),
  description: yup.string().required("Description is required"),
  learning_outcomes: yup.string().required("Learning outcomes are required"),
  course_fee: yup.string().required("Course fee is required"),
  target_audience: yup.string().required("Target audience is required"),
  entry_requirement: yup.string().required("Entry requirement is required"),
  curriculum: yup.string().required("Curriculum is required"),
  course_content: yup.string().required("Course content is required"),
  learning_experience: yup.string().required("Learning experience is required"),
});

const EditProgramPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { UpdateProgramme, getPrograms } = PageManagement();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      title: "",
      slug: "",
      image: "",
      content: "",
      description: "",
      learning_outcomes: "",
      course_fee: "",
      target_audience: "",
      entry_requirement: "",
      curriculum: "",
      course_content: "",
      learning_experience: "",
    },
  });

  // Fetch program details and set as default values
  useEffect(() => {
    const fetchProgram = async () => {
      try {
        const programs = await getPrograms();
        const program = programs.find((p) => String(p.id) === String(id));
        if (program) {
          reset({
            title: program.title || "",
            slug: program.slug || "",
            image: program.image || "",
            content: program.content || "",
            description: program.description || "",
            learning_outcomes: program.learning_outcomes || "",
            course_fee: program.course_fee || "",
            target_audience: program.target_audience || "",
            entry_requirement: program.entry_requirement || "",
            curriculum: program.curriculum || "",
            course_content: program.course_content || "",
            learning_experience: program.learning_experience || "",
          });
        }
      } catch (err) {
        toast.error("Failed to fetch program details.");
      }
    };
    fetchProgram();
    // eslint-disable-next-line
  }, [id]);

  const onSubmit = async (data) => {
    toast.promise(
      UpdateProgramme(id, data),
      {
        loading: "Updating program...",
        success: "Program updated successfully!",
        error: "Failed to update program."
      }
    ).then(() => {
      navigate("/dashboard/programmes");
    });
  };

  return (
    <div className="max-w-2xl mx-auto py-10 px-4">
      <h1 className="text-2xl font-bold mb-6">Update Program</h1>
      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input {...register("title")} placeholder="Title" className="w-full px-3 py-2 border rounded" />
          {errors.title && <p className="text-red-500 text-xs">{errors.title.message}</p>}
        </div>
        <div>
          <input {...register("slug")} placeholder="Slug" className="w-full px-3 py-2 border rounded" />
          {errors.slug && <p className="text-red-500 text-xs">{errors.slug.message}</p>}
        </div>
        <div>
          <input {...register("image")} placeholder="Image URL" className="w-full px-3 py-2 border rounded" />
          {errors.image && <p className="text-red-500 text-xs">{errors.image.message}</p>}
        </div>
        <div>
          <textarea {...register("content")} placeholder="Content" className="w-full px-3 py-2 border rounded" />
          {errors.content && <p className="text-red-500 text-xs">{errors.content.message}</p>}
        </div>
        <div>
          <textarea {...register("description")} placeholder="Description" className="w-full px-3 py-2 border rounded" />
          {errors.description && <p className="text-red-500 text-xs">{errors.description.message}</p>}
        </div>
        <div>
          <textarea {...register("learning_outcomes")} placeholder="Learning Outcomes" className="w-full px-3 py-2 border rounded" />
          {errors.learning_outcomes && <p className="text-red-500 text-xs">{errors.learning_outcomes.message}</p>}
        </div>
        <div>
          <input {...register("course_fee")} placeholder="Course Fee" className="w-full px-3 py-2 border rounded" />
          {errors.course_fee && <p className="text-red-500 text-xs">{errors.course_fee.message}</p>}
        </div>
        <div>
          <textarea {...register("target_audience")} placeholder="Target Audience" className="w-full px-3 py-2 border rounded" />
          {errors.target_audience && <p className="text-red-500 text-xs">{errors.target_audience.message}</p>}
        </div>
        <div>
          <textarea {...register("entry_requirement")} placeholder="Entry Requirement" className="w-full px-3 py-2 border rounded" />
          {errors.entry_requirement && <p className="text-red-500 text-xs">{errors.entry_requirement.message}</p>}
        </div>
        <div>
          <textarea {...register("curriculum")} placeholder="Curriculum" className="w-full px-3 py-2 border rounded" />
          {errors.curriculum && <p className="text-red-500 text-xs">{errors.curriculum.message}</p>}
        </div>
        <div>
          <textarea {...register("course_content")} placeholder="Course Content" className="w-full px-3 py-2 border rounded" />
          {errors.course_content && <p className="text-red-500 text-xs">{errors.course_content.message}</p>}
        </div>
        <div>
          <textarea {...register("learning_experience")} placeholder="Learning Experience" className="w-full px-3 py-2 border rounded" />
          {errors.learning_experience && <p className="text-red-500 text-xs">{errors.learning_experience.message}</p>}
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-[#2C473A] text-white py-2 rounded font-semibold hover:bg-[#1e3226]"
        >
          {isSubmitting ? "Updating..." : "Update Program"}
        </button>
      </form>
    </div>
  );
};

export default EditProgramPage;