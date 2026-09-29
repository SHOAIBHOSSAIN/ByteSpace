import Navbar from "../components/Navbar";
import CourseCard from "../components/CourseCard";
import SectionTitle from "../components/SectionTitle";
import { courses } from "../data/courses";
import CategorySection from "../components/CategorySection ";
import Hero from "../components/Hero";
import PartnerLogos from "../components/PartnerLogos";

const Home = () => {
	return (
		<main className="hero-grid relative isolate text-white">
			<Navbar />
			<Hero />
			<PartnerLogos />

			<section id="courses" className="bg-white px-5 py-14 text-[#171923] sm:px-8 sm:py-20">
				<div className="mx-auto max-w-6xl">
					<SectionTitle
						title="Discover Your Passion, Build Your Skills"
						subtitle="At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life."
						className="mb-8 sm:mb-10"
					/>
					<div className="grid grid-cols-1 items-start gap-6 xl:grid-cols-2">
						{courses.map((course) => (
							<CourseCard key={course.id} course={course} />
						))}
					</div>
				</div>
			</section>
      <CategorySection />
		</main>
	);
};

export default Home;
