import styles from "../styles/Home.module.css";
import {TestButton} from "../components/TestButton";

export default {
  title: "TestButton",
  component: TestButton,
}

export const Default = () => <TestButton onClick={() => alert('test button stories')}
                                         className={styles.button}
                                         dataTestId={"add"}
                                         title={'test button'} />