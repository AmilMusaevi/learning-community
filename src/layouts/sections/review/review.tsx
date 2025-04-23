import SliderComponent from "@/components/slider/slider";
import quoteIcon from "@/assets/icons/quote.svg";
import avatar1 from "@/assets/images/human1.jpg";
import avatar2 from "@/assets/images/human2.jpg";
import avatar3 from "@/assets/images/human1.jpg";
import styles from "./review.module.scss";

const Review = () => {
  const slideData = [
    {
      id: 1,
      name: "Rizka Amalia",
      role: "Penanya",
      rating: 4.8,
      testimonial:
        "Saya sudah banyak mencari tentang pertanyaan yang saya cari saat ini, dan di Brainly Reborn ini saya mendapatkan jawaban yang akurat dan simple.",
      avatar: avatar1,
    },
    {
      id: 2,
      name: "Ahmad Dani",
      role: "Pelajar",
      rating: 4.8,
      testimonial:
        "Situs ini sangat membantu saya dalam mengerjakan tugas-tugas sekolah. Penjelasannya mudah dipahami dan responsnya cepat.",
      avatar: avatar2,
    },
    {
      id: 3,
      name: "Putri Indah",
      role: "Mahasiswa",
      rating: 4.9,
      testimonial:
        "Brainly Reborn memudahkan saya memahami konsep-konsep yang sulit. Platform yang sangat direkomendasikan untuk pelajar.",
      avatar: avatar3,
    },
    {
      id: 4,
      name: "Budi Santoso",
      role: "Guru",
      rating: 5.0,
      testimonial:
        "Sebagai guru, saya merekomendasikan Brainly Reborn untuk para siswa yang membutuhkan bantuan tambahan di luar kelas.",
      avatar: avatar2,
    },
    {
      id: 5,
      name: "Maya Sari",
      role: "Orang Tua",
      rating: 4.7,
      testimonial:
        "Sangat membantu anak saya dalam belajar. Jawaban yang diberikan jelas dan membantu pemahaman anak saya.",
      avatar: avatar1,
    },
  ];

  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);

    return (
      <div className={styles.stars}>
        {[...Array(5)].map((_, i) => (
          <span
            key={i}
            className={i < fullStars ? styles.star_filled : styles.star_empty}
          >
            ★
          </span>
        ))}
      </div>
    );
  };

  return (
    <div className={styles.reviewContainer} id="students">
      <h2 className={styles.review_title}>Tələbə rəyləri</h2>
      {/* <p className={styles.review_desc}>Lebih dari 17.000 penanya telah terbantu</p> */}
      <SliderComponent>
        {slideData.map((data) => (
          <div key={data.id} className={styles.reviewSlide}>
            <div>
              <div className={styles.ratingContainer}>
                <div className={styles.ratingNumber}>{data.rating}</div>
                {renderStars(data.rating)}
              </div>
            </div>

            <div>
              <div className={styles.quoteIcon}>
                <img src={quoteIcon} alt="icon" />
              </div>
              <div className={styles.reviewContent}>
                <div className={styles.reviewerInfo}>
                  <img
                    src={data.avatar}
                    alt={data.name}
                    className={styles.avatar}
                  />
                  <div className={styles.nameRole}>
                    <h3 className={styles.reviewerName}>{data.name}</h3>
                    <p className={styles.reviewerRole}>{data.role}</p>
                  </div>
                </div>

                <p className={styles.testimonial}>{data.testimonial}</p>
              </div>
            </div>
          </div>
        ))}
      </SliderComponent>
    </div>
  );
};

export default Review;
