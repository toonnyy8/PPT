import { h, reactive, defineComponent, createApp, Fragment, ref, Ref, onMounted } from "vue"
import { Tmpl1 } from "./template"

import { css } from "./css"
export const introductionPages = [
    <Tmpl1>
        {{
            title: () => "Introduction",
            content: () => (
                <div style={[css.m.x(10)]}>
                    Many tasks in daily life rely on voice as the medium of information
                    transmission.
                    <br />
                    <br />
                    However, all kinds of noise interference in the real environment will seriously
                    affect the performance of the speech task.
                    <br />
                    <br />
                    Therefore, the speech enhancement technology that removes these noises has
                    become an important pre-processing unit.
                </div>
            ),
        }}
    </Tmpl1>,
    <Tmpl1>
        {{
            title: () => "Introduction",
            content: () => (
                <div style={[css.m.x(10)]}>
                    And speech enhancement means that no matter what kind of noise environment, the
                    same speech should have the same features and can be restored to the same
                    result.
                    <br />
                    <br />
                    This part of the idea coincides with the contrastive learning of self-supervised
                    method.
                    <br />
                    <br />
                    Contrastive learning hopes that the features between positive samples are as
                    similar as possible, while the feature difference between negative samples is
                    the greater the better.
                </div>
            ),
        }}
    </Tmpl1>,
    <Tmpl1>
        {{
            title: () => "Introduction",
            content: () => (
                <div style={[css.m.x(10)]}>
                    I think learning speech features through CL method should have higher
                    performance than common deep learning speech enhancement methods.
                    <br />
                    <br />
                    However, it is not easy to determine the negative sample of the frame level in
                    the SE problem.
                    <br />
                    <br />
                    To this end, this study uses two methods, BYOL and SimSiam, which do not require
                    negative samples, and compares them with models that do not use the CL method.
                </div>
            ),
        }}
    </Tmpl1>,
]
