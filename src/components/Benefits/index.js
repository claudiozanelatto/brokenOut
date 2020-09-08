import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import './styles.css';

function Benefits() {

    return (
        <div>

            <div className="col s12 m4 l4 benefitSBlock">
                <svg width="197" height="197" viewBox="0 0 197 197" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="quadrado">
                        <g id="retanguloA">
                            <path id="Vector" d="M196.018 99.4009L99.4009 0L-3.62192e-05 96.6176L96.6176 196.019L196.018 99.4009Z" fill="#C4C4C4" />
                            <path id="borda" d="M194.604 99.3808L99.3809 1.41407L1.41408 96.6377L96.6377 194.604L194.604 99.3808Z" stroke="black" stroke-opacity="0.65" stroke-width="2" />
                        </g>
                        <path id="iconA" d="M132.982 76.2738H133.202C133.837 76.2738 134.399 76.5668 134.773 77.0144C144.059 86.5689 148.934 107.314 147.851 121.198C147.55 125.047 146.793 128.433 145.548 130.988C144.132 133.902 142.089 135.815 139.355 136.319C135.872 136.962 131.518 135.123 126.284 129.792C125.609 129.108 124.909 128.417 124.193 127.709C121.751 125.308 119.18 122.777 117.007 119.725H78.9921C76.811 122.801 74.2393 125.332 71.7896 127.733C71.0816 128.433 70.3816 129.117 69.7143 129.792C64.4813 135.123 60.1272 136.962 56.644 136.319C53.9095 135.815 51.8586 133.902 50.4506 130.988C49.2055 128.425 48.4486 125.047 48.1475 121.198C47.0651 107.249 51.9888 86.3817 61.348 76.8842C61.7468 76.4773 62.2676 76.2738 62.7966 76.2738V76.2657H63.0245C64.172 74.6868 65.5963 73.4172 67.1995 72.4569C69.6329 71.0001 72.4651 70.2758 75.281 70.2758C78.105 70.2758 80.9372 71.0001 83.3624 72.4569C84.9576 73.4091 86.3818 74.6787 87.513 76.2575H93.9505C93.4541 64.115 96.8315 61.0631 101.82 60.7213C103.627 60.5992 105.54 60.9166 107.542 61.2503C111.326 61.8769 115.509 62.5687 118.48 59.5982C119.277 58.8006 120.563 58.8006 121.361 59.5982C122.158 60.3957 122.158 61.6816 121.361 62.4792C116.909 66.9228 111.643 66.0519 106.882 65.2625C105.125 64.9695 103.448 64.6928 102.089 64.7824C99.3951 64.9614 97.6047 67.2076 98.0279 76.2738H108.502C109.641 74.695 111.074 73.4172 112.669 72.465C115.102 71.0082 117.934 70.2839 120.742 70.2839C123.55 70.2839 126.382 71.0164 128.816 72.465C130.411 73.4172 131.843 74.6868 132.982 76.2738ZM121.955 101.275C123.452 102.773 123.452 105.19 121.955 106.687C120.457 108.185 118.04 108.185 116.543 106.687C115.045 105.19 115.045 102.773 116.543 101.275C118.032 99.7857 120.457 99.7857 121.955 101.275ZM130.468 93.6412C131.965 95.1387 131.965 97.5558 130.468 99.0533C128.97 100.551 126.553 100.551 125.056 99.0533C123.558 97.5558 123.558 95.1387 125.056 93.6412C126.553 92.1437 128.97 92.1437 130.468 93.6412ZM113.434 93.6412C114.931 95.1387 114.931 97.5558 113.434 99.0533C111.936 100.551 109.519 100.551 108.022 99.0533C106.524 97.5558 106.524 95.1387 108.022 93.6412C109.519 92.1437 111.945 92.1437 113.434 93.6412ZM121.955 86.8212C123.452 88.3187 123.452 90.7358 121.955 92.2333C120.457 93.7307 118.04 93.7307 116.543 92.2333C115.045 90.7358 115.045 88.3187 116.543 86.8212C118.032 85.3319 120.457 85.3319 121.955 86.8212ZM69.8527 87.5048H76.5017V94.2841H83.2811V100.933H76.5017V107.713H69.8527V100.933H63.0733V94.2841H69.8527V87.5048ZM132.331 80.3512H131.892V80.343C131.2 80.343 130.525 79.9931 130.15 79.3501C129.279 77.9015 128.091 76.7621 126.724 75.9483C124.942 74.8821 122.85 74.3531 120.734 74.3531C118.626 74.3531 116.527 74.8821 114.744 75.9483C113.418 76.7377 112.262 77.8364 111.399 79.2199C111.066 79.8873 110.374 80.343 109.576 80.343H86.4306V80.3349C85.7389 80.3349 85.0634 79.9849 84.689 79.342C83.8263 77.8934 82.6381 76.7621 81.279 75.9483C79.4885 74.874 77.3888 74.3369 75.281 74.3369C73.1731 74.3369 71.0734 74.874 69.283 75.9483C67.9564 76.7458 66.7926 77.8364 65.9299 79.2199C65.5963 79.8873 64.9045 80.343 64.1069 80.343H63.6674C55.4802 89.3116 51.2157 108.136 52.2085 120.897C52.469 124.25 53.0956 127.139 54.1129 129.222C54.9593 130.956 56.0417 132.079 57.3764 132.323C59.5494 132.722 62.642 131.192 66.817 126.944C67.5088 126.244 68.2168 125.544 68.9411 124.836C71.4478 122.378 74.0928 119.774 76.1274 116.73C76.4692 116.087 77.1447 115.656 77.926 115.656H118.081V115.664C118.74 115.664 119.383 115.981 119.774 116.575C121.841 119.7 124.518 122.337 127.05 124.828C127.782 125.544 128.498 126.252 129.19 126.96C133.357 131.208 136.458 132.738 138.63 132.339C139.965 132.095 141.056 130.972 141.894 129.239C142.911 127.147 143.538 124.266 143.798 120.913C144.791 108.136 140.527 89.3116 132.331 80.3512Z" fill="black" />
                    </g>
                </svg>

                <h4>TITULO</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis</p>
            </div>
            <div className="col s12 m4 l4 benefitSBlock">
                <svg width="197" height="197" viewBox="0 0 197 197" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="quadradoC">
                        <g id="retanguloC">
                            <path id="Vector" d="M196.018 99.4009L99.4009 0L-3.62192e-05 96.6176L96.6176 196.019L196.018 99.4009Z" fill="#C4C4C4" />
                            <path id="bordaC" d="M194.604 99.3808L99.3809 1.41406L1.41408 96.6377L96.6377 194.604L194.604 99.3808Z" stroke="black" stroke-opacity="0.65" stroke-width="2" />
                        </g>
                        <path id="iconC" fill-rule="evenodd" clip-rule="evenodd" d="M73.8298 55.0139H91.8982L108.174 84.6165C108.523 85.2441 109.032 85.7392 109.611 86.053H85.3152L73.8298 55V55.0139ZM98 90.6973C111.808 90.6973 123 101.89 123 115.697C123 129.505 111.808 140.697 98 140.697C84.1925 140.69 73 129.498 73 115.69C73 101.883 84.1925 90.6973 98 90.6973ZM98 101.262L102.177 111.457L113.174 112.287L104.757 119.428L107.372 130.126L98 124.317L88.6276 130.126L91.2427 119.428L82.8187 112.28L93.8159 111.45L98 101.262ZM100.218 55.0139H121.361L112.854 78.0126L100.218 55.0139Z" fill="black" />
                    </g>
                </svg>
                <h4>TITULO</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis</p>
            </div>
            <div className="col s12 m4 l4 benefitSBlock">
                <svg width="197" height="197" viewBox="0 0 197 197" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="quadradoB">
                        <g id="retanguloB">
                            <path id="Vector" d="M196.018 99.4009L99.4009 0L-3.62192e-05 96.6176L96.6176 196.019L196.018 99.4009Z" fill="#C4C4C4" />
                            <path id="bordaB" d="M194.604 99.3808L99.3809 1.41406L1.41408 96.6377L96.6377 194.604L194.604 99.3808Z" stroke="black" stroke-opacity="0.65" stroke-width="2" />
                        </g>
                        <path id="iconB" fill-rule="evenodd" clip-rule="evenodd" d="M110.385 117.283C96.96 117.283 105.8 118.337 107.624 103.748C110.356 81.9287 131.105 81.9287 134.167 103.748C136.13 117.788 144.545 117.283 131.406 117.283H126.169C126.147 120.857 125.59 122.681 129.296 124.687C132.995 126.687 143 127.72 143 132.795V136.047C143 136.311 142.788 136.523 142.524 136.523C112.685 136.523 82.8389 136.523 53 136.523V127.112C56.9771 125.339 69.604 122.007 70.5854 117.034C70.8491 115.701 67.7729 111.24 66.96 108.875C65.7002 106.86 64.9238 103.022 66.4253 100.854C67.3188 99.5581 66.938 96.5332 66.938 94.8853C66.938 81.8481 89.7676 81.8555 89.7676 94.8853C89.7676 96.1963 89.5039 99.6606 90.1191 100.613C91.6719 103.008 91.1665 106.604 89.7456 108.875C89.0791 111.123 86.186 115.803 86.3325 117.034C87.3799 125.903 98.3223 121.509 102.966 128.152C106.042 126.841 110.129 126.079 112.868 124.438C116.127 122.49 115.571 120.527 115.549 117.283H110.385ZM91.3789 60H83.0366C81.7549 60 80.6636 60.4541 79.748 61.355C78.8398 62.2559 78.3931 63.3545 78.3931 64.6436V72.7808C78.3931 74.0698 78.8472 75.1685 79.748 76.0693C80.6489 76.9702 81.7476 77.4243 83.0366 77.4243H86.6182C86.3545 78.4497 86.0249 79.4238 85.6147 80.332C85.2119 81.2549 84.5308 82.1338 83.5859 82.9761C85.395 82.5073 87.0063 81.7969 88.4272 80.8667C89.8408 79.9438 91.0713 78.7866 92.082 77.4243H95.1509C96.4326 77.4243 97.5239 76.9629 98.4395 76.0693C99.3477 75.1685 99.7944 74.0698 99.7944 72.7808V64.6362C99.7944 63.3545 99.3403 62.2632 98.4395 61.3477C97.5459 60.4395 96.4473 60 95.1582 60H91.3789ZM115.776 69.3457V77.4829C115.776 78.2227 115.644 78.9185 115.373 79.563C115.109 80.2075 114.721 80.7935 114.187 81.3135C113.959 81.5405 113.718 81.7456 113.469 81.9141C113.212 82.0972 112.949 82.251 112.678 82.3828C112.67 82.3901 112.648 82.3901 112.634 82.4048C112.282 82.5659 111.931 82.6831 111.557 82.7637C111.169 82.8442 110.766 82.8882 110.356 82.8882H107.8C107.851 83.0493 107.902 83.2178 107.961 83.3789C108.115 83.833 108.298 84.2798 108.496 84.7192V84.7266C108.671 85.1367 108.913 85.5249 109.213 85.9131C109.521 86.3159 109.887 86.7041 110.327 87.0996C110.642 87.3779 110.678 87.854 110.385 88.1763C110.187 88.4033 109.895 88.4839 109.631 88.4106C108.686 88.1616 107.785 87.8613 106.95 87.4878C106.108 87.1216 105.31 86.6895 104.563 86.1987C103.823 85.7153 103.127 85.166 102.482 84.5581C101.94 84.0454 101.428 83.4814 100.944 82.8882H98.2637C97.7583 82.8882 97.2676 82.8296 96.8062 82.7051C96.3447 82.5806 95.9053 82.3901 95.4878 82.1338C95.1289 81.9214 95.019 81.4453 95.2314 81.0864C95.4438 80.7275 95.9199 80.6177 96.2788 80.8301C96.5645 81.0059 96.8721 81.1377 97.209 81.2329C97.5386 81.3281 97.8975 81.3647 98.2637 81.3647H101.325C101.56 81.3647 101.787 81.4673 101.94 81.6724C102.424 82.3169 102.951 82.9102 103.537 83.4521C104.108 83.9941 104.738 84.4849 105.412 84.9243C106.057 85.3418 106.745 85.7227 107.47 86.0522C107.324 85.8179 107.214 85.5835 107.104 85.3491C106.899 84.8804 106.701 84.397 106.533 83.8843C106.372 83.4009 106.218 82.9028 106.079 82.3975C106.049 82.3169 106.035 82.2217 106.035 82.1338C106.035 81.7163 106.372 81.3647 106.804 81.3647H110.363C110.671 81.3647 110.957 81.3354 111.235 81.2695C111.499 81.2109 111.748 81.123 111.982 81.0205C111.989 81.0132 112.004 81.0132 112.011 80.9985C112.209 80.9033 112.399 80.7935 112.575 80.6689C112.758 80.5371 112.934 80.3906 113.095 80.2148C113.476 79.834 113.762 79.4165 113.945 78.9624C114.128 78.5083 114.223 78.0103 114.223 77.4683V69.3604C114.223 68.8184 114.128 68.313 113.945 67.8662C113.762 67.4194 113.476 66.9946 113.095 66.6138C112.714 66.2329 112.297 65.9473 111.843 65.7642C111.389 65.5811 110.891 65.4858 110.349 65.4858H104.943C104.526 65.4858 104.174 65.1489 104.174 64.7168C104.174 64.2993 104.511 63.9478 104.943 63.9478H110.349C111.088 63.9478 111.77 64.0796 112.414 64.3506C113.059 64.6143 113.63 65.0024 114.165 65.5298C114.685 66.0498 115.087 66.6357 115.344 67.2803C115.607 67.9248 115.747 68.6133 115.747 69.3457H115.776V69.3457Z" fill="black" />
                    </g>
                </svg>

                <h4>TITULO</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis</p>
            </div>
        </div>
    )
}

export default Benefits;
