document.addEventListener("DOMContentLoaded", () => {
  // 1. Create an array of 100 thresholds for smooth, frame-by-frame tracking
  const scrollThresholds = [];
  for (let i = 0; i <= 1.0; i += 0.01) {
    scrollThresholds.push(i);
  }

  // 2. Create the new Scroll-Linked Observer
  const scrollBlurObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        // intersectionRatio is a number from 0 (just appeared) to 1 (fully visible)
        const ratio = entry.intersectionRatio;

        // Map the ratio to a blur amount. 
        // We multiply by 2 so it becomes fully clear when the element is 50% visible, 
        // rather than making you scroll past the whole thing to read it.
        let clarityProgress = Math.min(ratio * 2, 1); 
        
        // Calculate current blur: Starts at 15px, goes down to 0px
        let currentBlur = 15 - (15 * clarityProgress);

        // Apply the blur dynamically to the element
        entry.target.style.filter = `blur(${currentBlur}px)`;

        // Trigger the upward slide and fade-in once it crosses a small threshold
        if (ratio > 0.10 && !entry.target.classList.contains("show")) {
          entry.target.classList.add("show");
        }
      });
    },
    {
      threshold: scrollThresholds, 
      rootMargin: "0px 0px 0px 0px"
    }
  );

  // 3. Find and observe all elements
  const fadeElements = document.querySelectorAll(".fadeIntersect");
  fadeElements.forEach((el) => {
    scrollBlurObserver.observe(el);
  });
});
(function() {
  /* ── Activity data ─────────────────────────────────────
     Replace `code` with your FULL actual code for each activity.
     Use the same span classes: kw, cls, str, cm, num, fn
  ─────────────────────────────────────────────────────── */
  var activities = [
    {
      label: "Assignment 1",
      title: "Variables",
      desc: "Introduction to Java variables — declaring and printing primitive data types: int, double, char, boolean, and String.",
      tags: ["Variables", "Data Types", "Java"],
      accent: "#c792ea", bg: "#1e1a2e",
      filename: "Assignment 1 ",
      code: '<img src="images/act1-1.png" style="width:100%;border-radius:6px;">' +
            '<img src="images/act1-2.png" style="width:100%;border-radius:6px;margin-top:0.5rem;">',
    left: "calc(50% - 460px)", top: "150px", rot: "-4deg",   w: 260, z: 2
    },
    {
      label: "About me",
      title: "Introduction",
      desc: "A brief introduction to the developer behind the code, second-year BSIT student <3",
      tags: ["Interests", "About Me", "Intro"],
      accent: "#95e595", bg: "#1c281c",
      filename: "Hi, I'm Kez!",
      code: '<img src="images/Aboutme.jpg" style="width:100%;border-radius:6px;">',
     left: "calc(50% - 180px)", top: "100px", rot: "2deg",   w: 260, z: 1
    },
    {
      label: "Activity 1",
      title: "Code Analysis",
      desc: "Analyzing syntax structures, variable behavior, and compilation processes to understand how basic logic is executed",
      tags: ["Variables", "Data Types", "Java"],
      accent: "#d867c3", bg: "#2e1a2b",
      filename: "Act1_Variables",
      code: '<img src="images/Codeana.png" style="width:100%;border-radius:6px;">',
      left: "calc(50% + 100px)", top: "90px", rot: "-3deg",   w: 260, z: 3
    },
    {
      label: "Activity 2",
      title: "Operators",
      desc: "Explored bitwise, ternary, assignment, relational, unary, and logical operators through four mini-programs — producing precise outputs using operator precedence and bit manipulation.",
      tags: ["Operators", "Bitwise", "Ternary"],
      accent: "#82aaff", bg: "#111827",
      filename: "Act2_Operators.java",
      code: '<span class="cm">// 1. Bitwise Operators</span>\n' +
            '<span class="kw">public class</span> <span class="cls">Act2</span> {\n' +
            '    <span class="kw">public static void</span> <span class="fn">main</span>(String[] args) {\n' +
            '        <span class="kw">int</span> a = <span class="num">2</span>; <span class="cm">// 0010</span>\n' +
            '        <span class="kw">int</span> b = <span class="num">8</span>; <span class="cm">// 1000</span>\n' +
            '        <span class="kw">int</span> result1 = a | b;\n' +
            '        <span class="kw">int</span> result2 = a & b;\n' +
            '        System.out.println(result1 > result2);  <span class="cm">// 10 > 0 → true</span>\n' +
            '        System.out.println(result1);             <span class="cm">// 10</span>\n' +
            '        System.out.println(result1 == result2); <span class="cm">// false</span>\n' +
            '        System.out.println(result1 + (b >> <span class="num">1</span>) + <span class="num">1</span>); <span class="cm">// 10+4+1 = 15</span>\n' +
            '    }\n' +
            '}\n\n' +
            '<span class="cm">// 2. Ternary Operator</span>\n' +
            '<span class="kw">public class</span> <span class="cls">ternary</span> {\n' +
            '    <span class="kw">public static void</span> <span class="fn">main</span>(String[] args) {\n' +
            '        <span class="kw">int</span> x = <span class="num">50</span>, y = <span class="num">20</span>;\n' +
            '        <span class="kw">boolean</span> greater = (x > y) ? <span class="kw">true</span> : <span class="kw">false</span>;  <span class="cm">// true</span>\n' +
            '        <span class="kw">boolean</span> smaller = (x < y) ? <span class="kw">true</span> : <span class="kw">false</span>;  <span class="cm">// false</span>\n' +
            '        <span class="kw">int</span> num1 = (x == <span class="num">50</span>) ? x / <span class="num">2</span> : y;          <span class="cm">// 25</span>\n' +
            '        <span class="kw">int</span> num2 = (y < <span class="num">5</span>)  ? <span class="num">0</span> : <span class="num">30</span>;              <span class="cm">// 30</span>\n' +
            '        System.out.println(greater);\n' +
            '        System.out.println(smaller);\n' +
            '        System.out.println(num1);\n' +
            '        System.out.println(num2);\n' +
            '    }\n' +
            '}\n\n' +
            '<span class="cm">// 3. Assignment Operators</span>\n' +
            '<span class="kw">public class</span> <span class="cls">mdas</span> {\n' +
            '    <span class="kw">public static void</span> <span class="fn">main</span>(String[] args) {\n' +
            '        <span class="kw">int</span> num = <span class="num">100</span>;\n' +
            '        num += <span class="num">20</span>; System.out.println(<span class="str">"Addition: "</span> + num);      <span class="cm">// 120</span>\n' +
            '        num -= <span class="num">50</span>; System.out.println(<span class="str">"Subtraction: "</span> + num);   <span class="cm">// 70</span>\n' +
            '        num = <span class="num">12</span>; num *= <span class="num">12</span>; System.out.println(<span class="str">"Multiplication: "</span> + num); <span class="cm">// 144</span>\n' +
            '        num = <span class="num">160</span>; num /= <span class="num">10</span>; System.out.println(<span class="str">"Division: "</span> + num);     <span class="cm">// 16</span>\n' +
            '    }\n' +
            '}\n\n' +
            '<span class="cm">// 4. Mixed Operators — James</span>\n' +
            '<span class="kw">public class</span> <span class="cls">Act2Prog</span> {\n' +
            '    <span class="kw">public static void</span> <span class="fn">main</span>(String[] args) {\n' +
            '        <span class="kw">int</span> jamesAge = <span class="num">6</span>;\n' +
            '        <span class="kw">int</span> mathStars = <span class="num">5</span>;\n' +
            '        <span class="kw">int</span> readingGrade = <span class="num">95</span>;\n' +
            '        <span class="kw">boolean</span> isJamesCute = <span class="kw">true</span>;\n' +
            '        System.out.println(jamesAge == <span class="num">6</span>);                        <span class="cm">// relational → true</span>\n' +
            '        System.out.println(mathStars++ + ++mathStars);          <span class="cm">// unary → 5+7 = 12</span>\n' +
            '        System.out.println(mathStars | <span class="num">8</span>);                      <span class="cm">// bitwise → 15</span>\n' +
            '        System.out.println(jamesAge * <span class="num">3</span>);                       <span class="cm">// arithmetic → 18</span>\n' +
            '        readingGrade += <span class="num">3</span>;\n' +
            '        System.out.println(readingGrade);                       <span class="cm">// assignment → 98</span>\n' +
            '        System.out.println(isJamesCute && (readingGrade == <span class="num">100</span>)); <span class="cm">// logical → false</span>\n' +
            '    }\n' +
            '}\n\n' +
            '<img src="images/act2-1.png" style="width:100%;border-radius:6px;margin-top:1rem;">' +
            '<img src="images/act2-2.png" style="width:100%;border-radius:6px;margin-top:0.5rem;">' +
            '<img src="images/act2-3.png" style="width:100%;border-radius:6px;margin-top:0.5rem;">',
      left: "calc(50% + 350px)", top: "160px",  rot: "5deg",  w: 255, z: 4
    
    },
        {
      label: "Activity 3",
      title: "ATM Withdrawal Limit",
      desc: "Console-based ATM simulation with do-while loop menu, switch-case handling, and withdrawal limit logic — balance checking, deposit, and exit flow.",
      tags: ["Control Flow", "Switch-Case", "Loops"],
      accent: "#42c9f5", bg: "#00121a",
      filename: "BSIT2_4_VILLEGAS_KEZIA_ATMWithdrawalLimit.java",
      code: '<span class="cm">// ATM Withdrawal Limit — Kezia Lorein Villegas</span>\n' +
            '<span class="kw">import</span> java.util.Scanner;\n\n' +
            '<span class="kw">public class</span> <span class="cls">BSIT2_4_VILLEGAS_KEZIA_ATMWithdrawalLimit</span> {\n\n' +
            '    <span class="kw">public static void</span> <span class="fn">main</span>(String[] args) {\n' +
            '        Scanner sc = <span class="kw">new</span> Scanner(System.in);\n' +
            '        <span class="kw">double</span> balance = <span class="num">9000.00</span>;\n' +
            '        <span class="kw">int</span> choice;\n\n' +
            '        <span class="cm">// will repeat until user chooses to exit</span>\n' +
            '        <span class="kw">do</span> {\n' +
            '            System.out.println(<span class="str">"\\n===== ATM MENU ====="</span>);\n' +
            '            System.out.println(<span class="str">"1. Check Balance"</span>);\n' +
            '            System.out.println(<span class="str">"2. Deposit"</span>);\n' +
            '            System.out.println(<span class="str">"3. Withdraw"</span>);\n' +
            '            System.out.println(<span class="str">"4. Exit"</span>);\n' +
            '            System.out.print(<span class="str">"Choose an option: "</span>);\n' +
            '            choice = sc.<span class="fn">nextInt</span>();\n\n' +
            '            <span class="kw">switch</span> (choice) {\n' +
            '                <span class="kw">case</span> <span class="num">1</span>:\n' +
            '                    System.out.println(<span class="str">"Your current balance is : "</span> + balance + <span class="str">" pesos"</span>);\n' +
            '                    <span class="kw">break</span>;\n\n' +
            '                <span class="kw">case</span> <span class="num">2</span>:\n' +
            '                    System.out.print(<span class="str">"Enter amount to deposit: "</span>);\n' +
            '                    <span class="kw">double</span> deposit = sc.<span class="fn">nextDouble</span>();\n' +
            '                    <span class="cm">// for negative deposits</span>\n' +
            '                    <span class="kw">if</span> (deposit > <span class="num">0</span>) {\n' +
            '                        balance += deposit;\n' +
            '                        System.out.println(<span class="str">"You have successfully deposited "</span> + deposit + <span class="str">" pesos."</span>);\n' +
            '                    } <span class="kw">else</span> {\n' +
            '                        System.out.println(<span class="str">"Invalid deposit amount, please try again"</span>);\n' +
            '                    }\n' +
            '                    <span class="kw">break</span>;\n\n' +
            '                <span class="kw">case</span> <span class="num">3</span>:\n' +
            '                    System.out.print(<span class="str">"Enter amount to withdraw: "</span>);\n' +
            '                    <span class="kw">double</span> withdraw = sc.<span class="fn">nextDouble</span>();\n' +
            '                    <span class="cm">// for limit and check balance</span>\n' +
            '                    <span class="kw">if</span> (withdraw > <span class="num">3000</span>) {\n' +
            '                        System.out.println(<span class="str">"Withdrawal Limit Exceeded"</span>);\n' +
            '                    } <span class="kw">else if</span> (withdraw > balance) {\n' +
            '                        System.out.println(<span class="str">"Insufficient balance"</span>);\n' +
            '                    } <span class="kw">else if</span> (withdraw <= <span class="num">0</span>) {\n' +
            '                        System.out.println(<span class="str">"Invalid withdrawal amount, please try again"</span>);\n' +
            '                    } <span class="kw">else</span> {\n' +
            '                        balance -= withdraw;\n' +
            '                        System.out.println(<span class="str">"You have successfully withdrew "</span> + withdraw + <span class="str">" pesos."</span>);\n' +
            '                    }\n' +
            '                    <span class="kw">break</span>;\n\n' +
            '                <span class="kw">case</span> <span class="num">4</span>:\n' +
            '                    System.out.println(<span class="str">"Exiting program, thank you and God bless!"</span>);\n' +
            '                    <span class="kw">break</span>;\n\n' +
            '                <span class="kw">default</span>:\n' +
            '                    System.out.println(<span class="str">"Invalid choice. Please select from the menu (1-4)"</span>);\n' +
            '            }\n' +
            '        } <span class="kw">while</span> (choice != <span class="num">4</span>); <span class="cm">// DONEEE</span>\n\n' +
            '        sc.<span class="fn">close</span>();\n' +
            '    }\n' +
            '}\n\n' +
            '<img src="images/act3-1.png" style="width:100%;border-radius:6px;margin-top:1rem;">' +
            '<img src="images/act3-2.png" style="width:100%;border-radius:6px;margin-top:0.5rem;">' +
            '<img src="images/act3-3.png" style="width:100%;border-radius:6px;margin-top:1rem;">' +
            '<img src="images/act3-4.png" style="width:100%;border-radius:6px;margin-top:1rem;">' +
            '<img src="images/act3-5.png" style="width:100%;border-radius:6px;margin-top:1rem;">' +
            '<img src="images/act3-6.png" style="width:100%;border-radius:6px;margin-top:1rem;">' +
            '<img src="images/act3-7.png" style="width:100%;border-radius:6px;margin-top:1rem;">' +
            '<img src="images/act3-8.png" style="width:100%;border-radius:6px;margin-top:1rem;">' +
            '<img src="images/act3-9.png" style="width:100%;border-radius:6px;margin-top:1rem;">',
      left: "calc(50% - 380px)", top: "400px", rot: "3deg",    w: 265, z: 5

    },
    {
    label: "Activity 4",
    title: "Student Payment System",
    desc: "Menu-driven student billing system — tuition payment with balance tracking, one-time scholar discount (20%), transaction counter, and a final receipt on exit.",
    tags: ["Do-While", "Switch-Case", "Boolean Logic"],
    accent: "#f78c6c", bg: "#1e1008",
    filename: "BSIT2_4_VILLEGAS_KEZIA_LOREIN_StudentPaymentSystem.java",
    code: '<span class="cm">// Student Payment System — Kezia Lorein Villegas</span>\n' +
          '<span class="kw">import</span> java.util.Scanner;\n\n' +
          '<span class="kw">public class</span> <span class="cls">BSIT2_4_VILLEGAS_KEZIA_LOREIN_StudentPaymentSystem</span> {\n\n' +
          '    <span class="kw">public static void</span> <span class="fn">main</span>(String[] args) {\n' +
          '        Scanner sc = <span class="kw">new</span> Scanner(System.in);\n' +
          '        <span class="kw">int</span> transactions = <span class="num">0</span>;\n' +
          '        <span class="kw">boolean</span> discountApplied = <span class="kw">false</span>;\n\n' +
          '        System.out.print(<span class="str">"Enter Student name: "</span>);\n' +
          '        String studentName = sc.<span class="fn">nextLine</span>();\n' +
          '        System.out.print(<span class="str">"Enter Student ID: "</span>);\n' +
          '        String studentID = sc.<span class="fn">nextLine</span>();\n' +
          '        System.out.print(<span class="str">"Enter Total Tuition Fee: "</span>);\n' +
          '        <span class="kw">double</span> bal = sc.<span class="fn">nextDouble</span>();\n\n' +
          '        <span class="kw">int</span> choice;\n' +
          '        <span class="cm">// until user chooses to exit</span>\n' +
          '        <span class="kw">do</span> {\n' +
          '            System.out.println(<span class="str">"\\n===== PAYMENT MENU ====="</span>);\n' +
          '            System.out.println(<span class="str">"1. Pay Tuition"</span>);\n' +
          '            System.out.println(<span class="str">"2. Check Balance"</span>);\n' +
          '            System.out.println(<span class="str">"3. Apply Discount"</span>);\n' +
          '            System.out.println(<span class="str">"4. Exit"</span>);\n' +
          '            System.out.print(<span class="str">"Choose an option: "</span>);\n' +
          '            choice = sc.<span class="fn">nextInt</span>();\n\n' +
          '            <span class="kw">switch</span> (choice) {\n' +
          '                <span class="kw">case</span> <span class="num">1</span>:\n' +
          '                    <span class="kw">if</span> (bal <= <span class="num">0</span>) {\n' +
          '                        System.out.println(<span class="str">"No remaining balance. You are fully paid"</span>);\n' +
          '                    } <span class="kw">else</span> {\n' +
          '                        System.out.print(<span class="str">"Enter payment amount: "</span>);\n' +
          '                        <span class="kw">double</span> payment = sc.<span class="fn">nextDouble</span>();\n' +
          '                        <span class="kw">if</span> (payment > <span class="num">0</span>) {\n' +
          '                            <span class="kw">if</span> (payment > bal) {\n' +
          '                                System.out.println(<span class="str">"Invalid Payment. It exceeds the balance"</span>);\n' +
          '                            } <span class="kw">else</span> {\n' +
          '                                bal -= payment;\n' +
          '                                System.out.println(<span class="str">"Payment successful! We have deducted "</span> + payment + <span class="str">" from your balance"</span>);\n' +
          '                                transactions++;\n' +
          '                            }\n' +
          '                        } <span class="kw">else</span> {\n' +
          '                            System.out.println(<span class="str">"The payment must be greater than 0"</span>);\n' +
          '                        }\n' +
          '                    }\n' +
          '                    <span class="kw">break</span>;\n\n' +
          '                <span class="kw">case</span> <span class="num">2</span>:\n' +
          '                    <span class="kw">if</span> (bal <= <span class="num">0</span>) {\n' +
          '                        System.out.println(<span class="str">"There is no remaining balance"</span>);\n' +
          '                    } <span class="kw">else</span> {\n' +
          '                        System.out.println(<span class="str">"Remaining Balance: "</span> + bal);\n' +
          '                    }\n' +
          '                    transactions++;\n' +
          '                    <span class="kw">break</span>;\n\n' +
          '                <span class="kw">case</span> <span class="num">3</span>:\n' +
          '                    <span class="kw">if</span> (discountApplied) {\n' +
          '                        System.out.println(<span class="str">"Discount has already been applied! Cannot apply multiple times."</span>);\n' +
          '                    } <span class="kw">else if</span> (bal <= <span class="num">0</span>) {\n' +
          '                        System.out.println(<span class="str">"No remaining balance to discount"</span>);\n' +
          '                    } <span class="kw">else</span> {\n' +
          '                        System.out.println(<span class="str">"Are you a:"</span>);\n' +
          '                        System.out.println(<span class="str">"1. Regular Student"</span>);\n' +
          '                        System.out.println(<span class="str">"2. Scholar"</span>);\n' +
          '                        System.out.print(<span class="str">"Select student type: "</span>);\n' +
          '                        <span class="kw">int</span> studentType = sc.<span class="fn">nextInt</span>();\n' +
          '                        <span class="kw">if</span> (studentType == <span class="num">1</span>) {\n' +
          '                            System.out.println(<span class="str">"Regular Students do not receive a discount :("</span>);\n' +
          '                            discountApplied = <span class="kw">true</span>;\n' +
          '                        } <span class="kw">else if</span> (studentType == <span class="num">2</span>) {\n' +
          '                            <span class="kw">double</span> discount = bal * <span class="num">0.20</span>;\n' +
          '                            bal -= discount;\n' +
          '                            System.out.println(<span class="str">"Applied scholar discount of 20%! You have saved: "</span> + discount);\n' +
          '                            discountApplied = <span class="kw">true</span>;\n' +
          '                        } <span class="kw">else</span> {\n' +
          '                            System.out.println(<span class="str">"Invalid student type selected. Try again"</span>);\n' +
          '                        }\n' +
          '                    }\n' +
          '                    <span class="kw">break</span>;\n\n' +
          '                <span class="kw">case</span> <span class="num">4</span>:\n' +
          '                    System.out.println(<span class="str">"\\n--- FINAL RECEIPT ---"</span>);\n' +
          '                    System.out.println(<span class="str">"Student Name: "</span> + studentName);\n' +
          '                    System.out.println(<span class="str">"Total Transactions: "</span> + transactions);\n' +
          '                    System.out.println(<span class="str">"Final Balance: "</span> + bal);\n' +
          '                    System.out.println(<span class="str">"Exiting system. Thank you and God bless!"</span>);\n' +
          '                    <span class="kw">break</span>;\n\n' +
          '                <span class="kw">default</span>:\n' +
          '                    System.out.println(<span class="str">"Invalid choice. Please select a valid option and try again"</span>);\n' +
          '            }\n' +
          '        } <span class="kw">while</span> (choice != <span class="num">4</span>);\n\n' +
          '        sc.<span class="fn">close</span>();\n' +
          '    }\n' +
          '}\n\n' +
          '<img src="images/act4-1.png" style="width:100%;border-radius:6px;margin-top:1rem;">' +
          '<img src="images/act4-2.png" style="width:100%;border-radius:6px;margin-top:0.5rem;">' +
          '<img src="images/act4-3.png" style="width:100%;border-radius:6px;margin-top:0.5rem;">' +
          '<img src="images/act4-4.png" style="width:100%;border-radius:6px;margin-top:0.5rem;">' + 
          '<img src="images/act4-5.png" style="width:100%;border-radius:6px;margin-top:0.5rem;">',
   left: "calc(50% - 100px)",  top: "420px", rot: "-2deg",    w: 255, z: 6
  },
    {
      label: "Activity 5",
      title: "Personal Expense Tracker",
      desc: "Full OOP capstone — Student class with encapsulated payment fields, methods for fee computation, receipt generation, and balance tracking.",
      tags: ["Methods", "OOP", "Encapsulation"],
      accent: "#f5c842", bg: "#1a1600",
      filename: "ExpenseTrackerVillegas.java",
      code: '<span class="cm">// Personal Expense Tracker — Kezia Lorein Villegas</span>\n' +
            '<span class="kw">import</span> java.util.Scanner;\n\n' +
            '<span class="kw">public class</span> <span class="cls">ExpenseTrackerVillegas</span> {\n\n' +
            '    <span class="kw">static void</span> <span class="fn">displayTitle</span>() {\n' +
            '        System.out.println(<span class="str">"---------------------------------"</span>);\n' +
            '        System.out.println(<span class="str">"     PERSONAL EXPENSE TRACKER  "</span>);\n' +
            '        System.out.println(<span class="str">"---------------------------------"</span>);\n' +
            '    }\n\n' +
            '    <span class="kw">static double</span> <span class="fn">calctotal</span>(<span class="kw">double</span> food, <span class="kw">double</span> transportation, <span class="kw">double</span> utilities, <span class="kw">double</span> other) {\n' +
            '        <span class="kw">double</span> total = food + transportation + utilities + other;\n' +
            '        <span class="kw">return</span> total;\n' +
            '    }\n\n' +
            '    <span class="kw">static</span> String <span class="fn">checkbudget</span>(<span class="kw">double</span> total, <span class="kw">double</span> budget) {\n' +
            '        <span class="kw">if</span> (total > budget) {\n' +
            '            <span class="kw">return</span> <span class="str">"You\'re over budget! Exceeded by PHP "</span> + String.<span class="fn">format</span>(<span class="str">"%.2f"</span>, total - budget);\n' +
            '        } <span class="kw">else</span> {\n' +
            '            <span class="kw">return</span> <span class="str">"You\'re within budget :) You have PHP "</span> + String.<span class="fn">format</span>(<span class="str">"%.2f"</span>, budget - total) + <span class="str">" remaining."</span>;\n' +
            '        }\n' +
            '    }\n\n' +
            '    <span class="kw">static void</span> <span class="fn">displaySummary</span>(<span class="kw">double</span> food, <span class="kw">double</span> transportation, <span class="kw">double</span> utilities, <span class="kw">double</span> other, <span class="kw">double</span> budget) {\n' +
            '        <span class="kw">double</span> total = <span class="fn">calctotal</span>(food, transportation, utilities, other);\n' +
            '        String status = <span class="fn">checkbudget</span>(total, budget);\n' +
            '        System.out.println(<span class="str">"\\n-----------------"</span>);\n' +
            '        System.out.println(<span class="str">"Expense Summary"</span>);\n' +
            '        System.out.println(<span class="str">"Food:           PHP "</span> + String.<span class="fn">format</span>(<span class="str">"%.2f"</span>, food));\n' +
            '        System.out.println(<span class="str">"Transportation: PHP "</span> + String.<span class="fn">format</span>(<span class="str">"%.2f"</span>, transportation));\n' +
            '        System.out.println(<span class="str">"Utilities:      PHP "</span> + String.<span class="fn">format</span>(<span class="str">"%.2f"</span>, utilities));\n' +
            '        System.out.println(<span class="str">"Other:          PHP "</span> + String.<span class="fn">format</span>(<span class="str">"%.2f"</span>, other));\n' +
            '        System.out.println(<span class="str">"Total Expenses: PHP "</span> + String.<span class="fn">format</span>(<span class="str">"%.2f"</span>, total));\n' +
            '        System.out.println(<span class="str">"Budget:         PHP "</span> + String.<span class="fn">format</span>(<span class="str">"%.2f"</span>, budget));\n' +
            '        System.out.println(<span class="str">"Status: "</span> + status);\n' +
            '    }\n\n' +
            '    <span class="kw">static void</span> <span class="fn">displayMessage</span>(String name, <span class="kw">double</span> total, <span class="kw">double</span> budget) {\n' +
            '        <span class="kw">if</span> (total > budget) {\n' +
            '            System.out.println(<span class="str">"Hey " + name + ", try to spend less! See Matt 6:33 :>"</span>);\n' +
            '        } <span class="kw">else</span> {\n' +
            '            System.out.println(<span class="str">"Good job, " + name + "! Be a good steward!"</span>);\n' +
            '        }\n' +
            '    }\n\n' +
            '    <span class="kw">public static void</span> <span class="fn">main</span>(String[] args) {\n' +
            '        Scanner sc = <span class="kw">new</span> Scanner(System.in);\n' +
            '        System.out.print(<span class="str">"Enter your name: "</span>);\n' +
            '        String name = sc.<span class="fn">nextLine</span>();\n' +
            '        <span class="fn">displayTitle</span>();\n' +
            '        System.out.print(<span class="str">"Food: "</span>); <span class="kw">double</span> food = sc.<span class="fn">nextDouble</span>();\n' +
            '        System.out.print(<span class="str">"Transportation: "</span>); <span class="kw">double</span> transportation = sc.<span class="fn">nextDouble</span>();\n' +
            '        System.out.print(<span class="str">"Utilities: "</span>); <span class="kw">double</span> utilities = sc.<span class="fn">nextDouble</span>();\n' +
            '        System.out.print(<span class="str">"Other: "</span>); <span class="kw">double</span> other = sc.<span class="fn">nextDouble</span>();\n' +
            '        System.out.print(<span class="str">"Monthly Budget: "</span>); <span class="kw">double</span> budget = sc.<span class="fn">nextDouble</span>();\n' +
            '        <span class="kw">double</span> total = <span class="fn">calctotal</span>(food, transportation, utilities, other);\n' +
            '        <span class="fn">displaySummary</span>(food, transportation, utilities, other, budget);\n' +
            '        <span class="fn">displayMessage</span>(name, total, budget);\n' +
            '        sc.<span class="fn">close</span>();\n' +
            '    }\n' +
            '}\n\n' +
            '<img src="images/act5-1.png" style="width:100%;border-radius:6px;margin-top:1rem;">' +
            '<img src="images/act5-2.png" style="width:100%;border-radius:6px;margin-top:0.5rem;">' +
            '<img src="images/act5-3.png" style="width:100%;border-radius:6px;margin-top:0.5rem;">' +
            '<img src="images/act5-4.png" style="width:100%;border-radius:6px;margin-top:0.5rem;">' +
            '<img src="images/act5-5.png" style="width:100%;border-radius:6px;margin-top:0.5rem;">',
      left: "calc(50% + 200px)", top: "380px", rot: "4deg", w: 265, z: 7
    }
  ];

  var wrap     = document.getElementById('archiveWrap');
  var lb       = document.getElementById('archiveLightbox');
  var lbCode   = document.getElementById('archiveLbCode');
  var lbBar    = document.getElementById('archiveLbBar');
  var lbPre    = document.getElementById('archiveLbPre');
  var lbInfo   = document.getElementById('archiveLbInfo');
  var lbLabel  = document.getElementById('archiveLbLabel');
  var lbTitle  = document.getElementById('archiveLbTitle');
  var lbDesc   = document.getElementById('archiveLbDesc');
  var lbTags   = document.getElementById('archiveLbTags');
  var lbFile   = document.getElementById('archiveLbFilename');
  var lbClose  = document.getElementById('archiveLbClose');
  var lbPrev   = document.getElementById('archiveLbPrev');
  var lbNext   = document.getElementById('archiveLbNext');
  var dotsWrap = document.getElementById('archiveNavDots');

  if (!wrap || !lb) return;

  var currentIdx = 0;
  var docEls = [];

  /* Build scattered cards */
  activities.forEach(function(act, i) {
    var doc = document.createElement('div');
    doc.className = 'archive-doc';
    doc.style.left      = act.left;
    doc.style.top       = act.top;
    doc.style.width     = act.w + 'px';
    doc.style.zIndex    = act.z;
    doc.style.transform = 'rotate(' + act.rot + ')';

    doc.innerHTML =
      '<div class="arc-doc-inner" style="background:' + act.bg + '">' +
        '<div class="arc-header">' +
          '<span class="arc-dot-circle" style="background:#ff5f57"></span>' +
          '<span class="arc-dot-circle" style="background:#febc2e"></span>' +
          '<span class="arc-dot-circle" style="background:#28c840"></span>' +
          '<span style="font-size:0.46rem;color:rgba(255,255,255,0.25);margin-left:6px;font-family:Space Mono,monospace">' + act.filename + '</span>' +
        '</div>' +
        '<span class="arc-screen-preview">' + act.code + '</span>' +
        '<div class="arc-expand-hint">click to expand ↗</div>' +
        '<span class="arc-badge" style="background:' + act.accent + '22;color:' + act.accent + '">' + act.label + '</span>' +
      '</div>';

    doc.addEventListener('click', function(e) {
      e.stopPropagation();
      openLightbox(i);
    });

    wrap.appendChild(doc);
    docEls.push(doc);

    var dot = document.createElement('button');
    dot.className = 'arc-nav-dot';
    dot.addEventListener('click', function(e) { e.stopPropagation(); openLightbox(i); });
    dotsWrap.appendChild(dot);
  });

  function openLightbox(i) {
    currentIdx = i;
    var act = activities[i];

    lbCode.style.background  = act.bg;
    lbBar.style.background   = 'rgba(255,255,255,0.04)';
    lbFile.textContent        = act.filename;
    lbPre.innerHTML           = act.code;
    lbInfo.style.background   = act.accent;
    lbLabel.textContent       = act.label;
    lbTitle.textContent       = act.title;
    lbDesc.textContent        = act.desc;
    lbTags.innerHTML          = act.tags.map(function(t) {
      return '<span class="arc-tag">' + t + '</span>';
    }).join('');

    lb.style.display        = 'flex';
    document.body.style.overflow = 'hidden';

    dotsWrap.querySelectorAll('.arc-nav-dot').forEach(function(d, idx) {
      d.classList.toggle('arc-dot-active', idx === i);
    });
  }

  function closeLightbox() {
    lb.style.display = 'none';
    document.body.style.overflow = '';
  }

  lbClose.addEventListener('click', closeLightbox);
  lb.addEventListener('click', function(e) {
    if (e.target === lb) closeLightbox();
  });

  lbPrev.addEventListener('click', function() {
    openLightbox((currentIdx - 1 + activities.length) % activities.length);
  });
  lbNext.addEventListener('click', function() {
    openLightbox((currentIdx + 1) % activities.length);
  });

  document.addEventListener('keydown', function(e) {
    if (lb.style.display === 'none') return;
    if (e.key === 'Escape')     closeLightbox();
    if (e.key === 'ArrowRight') openLightbox((currentIdx + 1) % activities.length);
    if (e.key === 'ArrowLeft')  openLightbox((currentIdx - 1 + activities.length) % activities.length);
  });
})();
