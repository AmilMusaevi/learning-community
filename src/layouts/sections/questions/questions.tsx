import avatar1 from "@/assets/images/human1.jpg";
import avatar2 from "@/assets/images/human2.jpg";
import avatar3 from "@/assets/images/human1.jpg";
import styles from "./questions.module.scss";

export const Questions = () => {
  const questions = [
    {
      id: 1,
      user: {
        name: "Rizka Amalia",
        role: "Penanya",
        avatar: avatar1
      },
      question: "Apa yang dimaksud dengan IoT (Internet of Things) dan jelaskan contohnya?"
    },
    {
      id: 2,
      user: {
        name: "Rizka Amalia",
        role: "Penanya",
        avatar: avatar2
      },
      question: "Apa yang dimaksud dengan IoT (Internet of Things) dan jelaskan contohnya?"
    },
    {
      id: 3,
      user: {
        name: "Haikal Putra",
        role: "Penanya",
        avatar: avatar3
      },
      question: "Apa yang dimaksud dengan IoT (Internet of Things) dan jelaskan contohnya?"
    }
  ];

  return (
    <div className={styles.questions} id="questions">
      <div className={styles.questions_header}>
        <h2 className={styles.questions_title}>Kursun formatı</h2>
        <p className={styles.questions_subtitle}>Pertanyaan yang sering muncul</p>
      </div>

      <div className={styles.questions_grid}>
        {questions.map((question) => (
          <div key={question.id} className={styles.questions_card}>
            <div className={styles.questions_card_user}>
              <div className={styles.questions_card_user_avatar}>
                <img src={question.user.avatar} alt={question.user.name} />
              </div>
              <div className={styles.questions_card_user_info}>
                <h4 className={styles.questions_card_user_info_name}>
                  {question.user.name}
                </h4>
                <p className={styles.questions_card_user_info_role}>
                  {question.user.role}
                </p>
              </div>
            </div>
            <div className={styles.questions_card_content}>
              <p className={styles.questions_card_question}>{question.question}</p>
            </div>
            <div className={styles.questions_card_actions}>
              <button className={styles.questions_card_button}>Jawaban</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Questions;