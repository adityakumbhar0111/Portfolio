function scrollToTop() {
  window.scrollTo({top: 0, behavior: "smooth"});
}

AOS.init();

var typed = new Typed(".auto-type", {
  strings: ["Coding", "Learning", "Web Developer", "Full-Stack Developer"],
  typeSpeed: 150,
  backSpeed: 150,
  loop: true,
});

const toggleBtn = document.querySelector(".navbar-toggle");
const navLinks = document.querySelector(".nav-links");
const navItems = document.querySelectorAll(".nav-links li a");

toggleBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  toggleBtn.classList.toggle("active");
});

navItems.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    toggleBtn.classList.remove("active");
  });
});

// Optional: Add subtle motion speed changes or hover pause
const orbit = document.querySelector(".orbit");
orbit.addEventListener(
  "mouseenter",
  () => (orbit.style.animationPlayState = "paused")
);
orbit.addEventListener(
  "mouseleave",
  () => (orbit.style.animationPlayState = "running")
);

const snippets = {
  c: `<span class="keyword">#include</span> <span class="string">&lt;stdio.h&gt;</span>

<span class="keyword">int</span> main() {
  printf(<span class="string">"Hello C"</span>);
  <span class="keyword">return</span> 0;
}`,

  cpp: `<span class="keyword">#include</span> <span class="string">&lt;iostream&gt;</span>
<span class="keyword">using</span> namespace std;

<span class="keyword">int</span> main() {
  cout &lt;&lt; <span class="string">"Hello C++"</span>;
}`,

  java: `<span class="keyword">public class</span> Main {
  <span class="keyword">public static void</span> main(String[] args) {
    System.out.println(<span class="string">"Hello Java"</span>);
  }
}`,

  html: `<span class="tag">&lt;h1&gt;</span>Hello HTML<span class="tag">&lt;/h1&gt;</span>
<span class="tag">&lt;p&gt;</span>Sample paragraph<span class="tag">&lt;/p&gt;</span>`,

  css: `body {
  <span class="attr">background</span>: <span class="value">#222</span>;
  <span class="attr">color</span>: <span class="value">white</span>;
}`,

  js: `<span class="keyword">function</span> greet() {
  console.log(<span class="string">"Hello JavaScript"</span>);
}`,

  react: `<span class="keyword">function</span> App() {
  <span class="keyword">return</span> &lt;h1&gt;Hello React&lt;/h1&gt;;
}`,

  mysql: `<span class="keyword">SELECT</span> * <span class="keyword">FROM</span> users
<span class="keyword">WHERE</span> age &gt; 18;`,

  spring: `@GetMapping(<span class="string">"/hello"</span>)
<span class="keyword">public String</span> hello() {
  <span class="keyword">return</span> <span class="string">"Hello Spring Boot"</span>;
}`,

  github: `git init
git add .
git commit -m <span class="string">"first commit"</span>`,

  vs: `Console.WriteLine(<span class="string">"Hello VS!"</span>);`,

  eclipse: `System.out.println(<span class="string">"Hello Eclipse!"</span>);`,
};

document.querySelectorAll(".skill-card").forEach((card) => {
  const lang = card.getAttribute("data-lang");
  const popup = card.querySelector(".popup");
  popup.innerHTML = `<pre>${snippets[lang]}</pre>`;
});
